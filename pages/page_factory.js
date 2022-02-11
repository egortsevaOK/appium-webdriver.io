const ExpensePage = require('./expense_page');
const StatisticsPage = require('./statistics_page');
const SettingsPage = require('./settings_page');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case 'Expense':
        return new ExpensePage();
      case 'Statistics':
        return new StatisticsPage();
      case 'Settings':
        return new SettingsPage();
      default:
        return new BasePage();
    };
  };
};

module.exports = PageFactory;
