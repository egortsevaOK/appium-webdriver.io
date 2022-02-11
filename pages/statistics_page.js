const BasePage = require('./base_page');

class StatisticsPage extends BasePage {
  constructor() {
    super();
    this.statisticsView = `android=${'new UiSelector().text("Monthly top").className("android.widget.TextView")'}`;
    this.numbersOnly = `android=${'new UiSelector().text("Numbers only").className("android.widget.CheckedTextView")'}`;
    this.allTime = `android=${'new UiSelector().text("All-time top").className("android.widget.CheckedTextView")'}`;
    this.totalAmount = '//android.widget.TextView[@resource-id="com.github.vitalliuss.financeanalyzer:id/textViewGrandTotalData"]';
  };

  async openViewDropdown() {
    const statisticsView = await $(this.statisticsView);
    return statisticsView.click();
  }

  async showAllTimeValue() {
    const allTime = await $(this.allTime);
    return allTime.click();
  }

  async showOnlyNumbers() {
    const numbersOnly = await $(this.numbersOnly);
    return numbersOnly.click();
  }

  async getTotalAmountValue() {
    const totalAmount = await $(this.totalAmount);
    return totalAmount.getText();
  }
};

module.exports = StatisticsPage;


