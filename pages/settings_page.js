const BasePage = require('./base_page');

class SettingsPage extends BasePage {
  constructor() {
    super();
    this.firstDaySetting = `android=${'new UiSelector().text("First day of week").className("android.widget.TextView")'}`;
    this.radiobtn = `android=${'new UiSelector().text("Sunday").className("android.widget.CheckedTextView")'}`;
    this.selectedDay = '//android.widget.TextView[@resource-id="android:id/summary"]';
  };

  async setFirstDay() {
    const firstDay = await $(this.firstDaySetting);
    await firstDay.click();
    const radiobtn = await $(this.radiobtn);
    return radiobtn.click();
  };

  async getSelectedFirstDayValue() {
    const selectedDay = await $(this.selectedDay);
    return selectedDay.getText();
  }
};

module.exports = SettingsPage;
