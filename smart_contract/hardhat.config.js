require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/H-_U32rINtDPzS0LNMs0tCh1zJ7_zqpV',
      accounts: ['a1c35cc6c063edda9e1173eb4ac474b59ef2bc901134d3f8e1f4198c8aef3e39'],
    },
  },
};