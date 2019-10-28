const CSV = require('../src/CSV');
const File = require('../src/File');

const column = ['number', 'name'];
const data = [[1, 'luka'], [2, 'larry']];
const mockFileObject = {
  createCsvFile: jest.fn(),
  downloadFile: jest.fn(),
};

describe('CSV', () => {
  test('generaterCsvData_CheckGeneraterData', () => {
    const expected = 'number,name\n1,luka\n2,larry\n';

    const actual = CSV.generaterCsvData(column, data);

    expect(actual).toBe(expected);
  });

  test('generaterCsv_WillBeCallcreateCsvFile', () => {
    const spy = jest.spyOn(CSV, 'getNewFile');
    spy.mockReturnValueOnce(mockFileObject);

    CSV.generaterCsv('filename', column, data);

    expect(mockFileObject.createCsvFile).toBeCalled();
  });

  test('generaterCsv_checkCreateCsvFileParam', () => {
    const spy = jest.spyOn(CSV, 'getNewFile');
    spy.mockReturnValueOnce(mockFileObject);
    const expected = 'number,name\n1,luka\n2,larry\n';

    CSV.generaterCsv('filename', column, data);

    expect(mockFileObject.createCsvFile.mock.calls[0][0]).toBe(expected);
  });

  test('generaterCsv_WillBeCalldownloadFile', () => {
    const spy = jest.spyOn(CSV, 'getNewFile');
    spy.mockReturnValueOnce(mockFileObject);
    const expected = 'filename';
    
    CSV.generaterCsv(expected, column, data);

    expect(mockFileObject.downloadFile.mock.calls[0][0]).toBe(expected);
  });
});
