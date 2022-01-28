var Dao = artifacts.require("./Dao.sol");

module.exports = function (deployer) {
    deployer.deploy(Dao, ["0x74657374737472696e6700000000000000000000000000000000000000000000"],)
}