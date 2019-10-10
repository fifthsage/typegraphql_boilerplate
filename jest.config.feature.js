module.exports = {
  globalSetup: "./__tests__/callSetup.js",
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  testRegex: "__tests__/Feature/.*.(test|spec)\\.[jt]s?$",
  cacheDirectory: ".jest/cache"
};
