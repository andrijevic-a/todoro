// API key: 97664e8bc1ada846e44f34e2
// userName: aleksandarandrijevic@gmail.com
// password: konjoslav#1
// example of fetching: https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP

// const { MongoClient } = require('mongodb');
// const uri = 'mongodb+srv://aca_admin:makovnjaca@todoro.fblarzt.mongodb.net/?retryWrites=true&w=majority';

// const dbName = 'todoro';
// const collectionName = 'currencyDB';

// const client = new MongoClient(uri);

// // Connect to the MongoDB server
// client.connect((err) => {
//   if (err) {
//     console.error('Failed to connect to the database:', err);
//     return;
//   }
  
//   console.log('Connected to MongoDB');

//   // Specify the database and collection
//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);
  
//   // Call the functions to retrieve the values and store them in the database
//   getEur();
//   getUsd();
// });



const url = 'https://v6.exchangerate-api.com/v6';
const APIkey = '97664e8bc1ada846e44f34e2';
const eur = 'EUR';
const usd = 'USD';
const rsd = 'RSD';

const dataObject = {};
let eurValue = 0;
let usdValue = 0;

const getEur = () => {
  fetch(`${url}/${APIkey}/pair/${eur}/${rsd}`)
  .then(res => res.json())
  .then(data => {
    dataObject.base_code = data.base_code; 
    dataObject.conversion_rate = data.conversion_rate;
    dataObject.documentation = data.documentation;
    dataObject.result = data.result;
    dataObject.target_code = data.target_code;
    dataObject.terms_of_use = data.terms_of_use;
    dataObject.time_last_update_unix = data.time_last_update_unix;
    dataObject.time_last_update_utc = data.time_last_update_utc;
    dataObject.time_next_update_unix = data.time_next_update_unix;
    dataObject.time_next_update_utc = data.time_next_update_utc;
    eurValue = dataObject.conversion_rate;
    console.log(eurValue);

    // // Insert the eurValue into the MongoDB collection
    // collection.insertOne({ eurValue }, (err) => {
    //   if (err) {
    //     console.error('Failed to insert eurValue:', err);
    //   } else {
    //     console.log('eurValue inserted into MongoDB');
    //   }
    // });
  });
}

const getUsd = () => {
  fetch(`${url}/${APIkey}/pair/${usd}/${rsd}`)
  .then(res => res.json())
  .then(data => {
    dataObject.base_code = data.base_code; 
    dataObject.conversion_rate = data.conversion_rate;
    dataObject.documentation = data.documentation;
    dataObject.result = data.result;
    dataObject.target_code = data.target_code;
    dataObject.terms_of_use = data.terms_of_use;
    dataObject.time_last_update_unix = data.time_last_update_unix;
    dataObject.time_last_update_utc = data.time_last_update_utc;
    dataObject.time_next_update_unix = data.time_next_update_unix;
    dataObject.time_next_update_utc = data.time_next_update_utc;
    usdValue = dataObject.conversion_rate;
    console.log(usdValue);

    // collection.insertOne({ usdValue }, (err) => {
    //   if (err) {
    //     console.error('Failed to insert usdValue:', err);
    //   } else {
    //     console.log('usdValue inserted into MongoDB');
    //   }
    // });
  });
}

// // Function to check if the current time is between 9am and 10am CET
// const isTime9to10amCET = () => {
//   const now = new Date();
//   const currentHour = now.getUTCHours();
//   const currentMinute = now.getUTCMinutes();
//   return currentHour === 7 && currentMinute >= 0 && currentMinute < 60; // 7 represents 9am CET (UTC+2)
// }

// // Function to run the API fetch functions between 9am and 10am CET
// const runBetween9to10amCET = () => {
//   if (isTime9to10amCET()) {
//     getEur();
//     getUsd();
//   }
// }

// // Check the time every minute and execute the functions if it's between 9am and 10am CET
// setInterval(runBetween9to10amCET, 59 * 60000); // 59 minutes interval