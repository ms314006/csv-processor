const File = require('./File');

class CSV {

  static getNewFile() {
    return new File();
  }

  static generaterCsv(filename, header, data) {
    const csvData = CSV.generaterCsvData(header, data);
    const file = this.getNewFile();
    file.createCsvFile(csvData);
    file.downloadFile(filename);
  }
  static generaterCsvData(header, data) {
    let result = '';
    data.forEach((rowData) => {
      rowData.forEach((colData) => {
        result = `${result}${colData},`;
      });
      result = `${result.slice(0, -1)}\n`;
    });

    return `${header.join(',')}\n${result}`;
  }
}

module.exports = CSV;
  