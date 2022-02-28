module.exports = async () => {
  return {
    verbose: true,
    "transformIgnorePatterns": [
      "<rootDir>/node_modules/(?!lodash-es)"
    ]
  };
};