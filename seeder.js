const fs = require('fs');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Transaction = require('./models/Transcation');
const Account = require('./models/Account');
const User = require('./models/User');

// Connect to DB
dotenv.config({path: './config.env'});
connectDB();

const accounts = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/account.json`, 'utf-8')
);

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/user.json`, 'utf-8')
);

const transactions = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/transcation.json`, 'utf-8')
);

const importData = async () => {
  try {
    await Account.create(accounts);
    await User.create(users);
    await Transaction.create(transactions)
    await console.log('Data imported...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Account.deleteMany();
    await User.deleteMany();
    console.log('Data destroyed...');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
