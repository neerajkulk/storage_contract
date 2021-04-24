const solc = require("solc");
const path = require("path");
const fs = require("fs");

const contractPath = path.resolve(__dirname, "Storage.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Storage.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

module.exports = {
  abi: output.contracts["Storage.sol"].Storage.abi,
  bytecode: output.contracts["Storage.sol"].Storage.evm.bytecode.object,
};
