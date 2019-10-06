process.env.NODE_ENV = "test";
process.env.TEST_HOST = `http://127.0.0.1:5000/api`;

jest.setTimeout(360000);
