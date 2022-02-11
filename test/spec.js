const {expect} = require('chai');
const PageFactory = require('../pages/page_factory');

describe('Finance analyzer mobile native app', function() {
  beforeEach(async function() {
    await browser.reloadSession();
  });

  it('Should add expense record with transport label', async function() {
    const expenseLabel = 'transport';
    await PageFactory.getPage('Expense').enterName('taxi');
    await PageFactory.getPage('Expense').enterAmount('8');
    await PageFactory.getPage('Expense').enterLabel(expenseLabel);
    await PageFactory.getPage('Expense').clickSave();
    const displayedLabel = await PageFactory.getPage('Expense').getExpenseLabel();
    expect(displayedLabel).to.be.equal(expenseLabel);
  });

  it('Should set Sunday as First day of week into date settings', async function() {
    await PageFactory.getPage('Expense').Header.openSettings();
    await PageFactory.getPage('Settings').setFirstDay();
    const selectedDay = await PageFactory.getPage('Settings').getSelectedFirstDayValue();
    expect(selectedDay).to.be.equal('Sunday');
  });

  it('Should add 2 expenses and show valid sum in "Numbers only" statistics', async function() {
    const label = 'food';
    const amountOne = 10;
    const amountTwo = 7;
    const sum = amountOne + amountTwo;
    await PageFactory.getPage('Expense').enterName( 'bread');
    await PageFactory.getPage('Expense').enterAmount(amountOne);
    await PageFactory.getPage('Expense').enterLabel(label);
    await PageFactory.getPage('Expense').clickSave();
    await PageFactory.getPage('Expense').enterName('milk');
    await PageFactory.getPage('Expense').enterAmount(amountTwo);
    await PageFactory.getPage('Expense').enterLabel(label);
    await PageFactory.getPage('Expense').clickSave();
    await PageFactory.getPage('Expense').Header.openStatistics();
    await PageFactory.getPage('Statistics').openViewDropdown();
    await PageFactory.getPage('Statistics').showOnlyNumbers();
    const totalAmountValue = await PageFactory.getPage('Statistics').getTotalAmountValue();
    expect(totalAmountValue).to.be.equal(sum.toString());
  });
});
