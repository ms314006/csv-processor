class File {
  constructor() {
    this.fileData = '';
    this.blob = null;
  }

  createCsvFile(fileData) {
    this.blob = new Blob([`\ufeff${fileData}`], {
      type: 'application/octet-stream; charset=utf-8',
    });
  }

  downloadFile(filename) {
    if (!this.blob) {
      throw new Error('No have create any file!');
    }
    if (!filename) {
      throw new Error('No have defined filename!');
    }
    const href = URL.createObjectURL(this.blob);
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = href;
    link.download = `${filename}.csv`;
    link.click();
  }
}

module.exports = File;
