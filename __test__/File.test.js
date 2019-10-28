const File = require('../src/File');

describe('File', () => {
  test('createCsvFile_PropertyBlobWillNotBeNull', () => {
    const file = new File();

    file.createCsvFile('csvData');
    
    expect(file.Blob).not.toBeNull();
  });

  test('downloadFile_NoUseCreateCsvFileWillThrowError', () => {
    const file = new File();
    const expected = 'No have create any file!';

    const actual = () => { file.downloadFile(); };

    expect(actual).toThrowError(expected);
  });

  test('downloadFile_NoHaveFilenameWillThrowError', () => {
    const file = new File();
    const expected = 'No have defined filename!';

    file.createCsvFile('csvData');
    const actual = () => { file.downloadFile(); };

    expect(actual).toThrowError(expected);
  });
});
