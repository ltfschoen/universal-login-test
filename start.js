const UniversalLoginSDK = require ('universal-login-sdk').default;
const sdk = new UniversalLoginSDK(
  'http://localhost:3311', // Relayer address
  'http://localhost:18545' // Node address (Ganache)
);
const privateKey = '';
const walletAddress = '';
const from = walletAddress;
const to = '';
const value = 5;
const gasToken = '';

// Create Wallet
async function createWallet() {
  const [privateKey, walletAddress] = await sdk.create('luke.mylogin.eth');
  console.log('Private Key: ', privateKey);
  console.log('Wallet Address: ', walletAddress);
}

// Show Balance
async function showBalance() {
  const balance = sdk.provider.getBalance(to);
  console.log('Balance: ', balance.toString());
}


// Create Transaction from Contract Wallet
async function sendEther() {
  await showBalance();
  const message = { to, from, value, gasToken };
  await sdk.execute(message, privateKey);
  await showBalance();
}

sendEther().catch(console.log);