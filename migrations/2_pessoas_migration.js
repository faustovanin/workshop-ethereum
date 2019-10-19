const Pessoas = artifacts.require("PessoasNaSala");

module.exports = function(deployer) {
  deployer.deploy(Pessoas);
};
