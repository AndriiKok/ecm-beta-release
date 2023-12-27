module.exports = (config, outputOptions, omt) => {
  outputOptions.format = "ecm";
  config.plugins = [omt()];
};
