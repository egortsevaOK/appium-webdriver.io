const BasePage = require('./base_page');

class ExpensePage extends BasePage {
  constructor() {
    super();
    this.nameInput = '//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseName"]';
    this.amountInput = '//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/editTextExpenseAmount"]';
    this.labelInput = '//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseLabel"]';
    this.saveButton = `android=${'new UiSelector().text("SAVE").className("android.widget.Button")'}`;
    this.label = '//android.widget.TextView[@resource-id="com.github.vitalliuss.financeanalyzer:id/expenseLabels"]';
  };

  async enterName(name) {
    const inputName = await $(this.nameInput);
    return inputName.setValue(name);
  };

  async enterAmount(amount) {
    const inputAmount = await $(this.amountInput);
    return inputAmount.setValue(amount);
  };

  async enterLabel(label) {
    const inputLabel = await $(this.labelInput);
    return inputLabel.setValue(label);
  };

  async clickSave() {
    const saveButton = await $(this.saveButton);
    return saveButton.click();
  }

  async getExpenseLabel() {
    const label = await $(this.label);
    return label.getText();
  };
};

module.exports = ExpensePage;
