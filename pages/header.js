class Header {
  constructor() {
    this.statistics = '~Statistics';
    this.settings = '~Settings';
    this.importExport = '~Import/Export';
    this.help = '~Help';
  };

  openStatistics() {
    return $(this.statistics).click();
  };

  openSettings() {
    return $(this.settings).click();
  };
};

module.exports = Header;
