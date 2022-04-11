const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe= require('stripe')('sk_test_51KMviLSAKvxUcn5rPCEMCZAmJeml5WDg3UzKe3AOYIuOCofGXkhGk3lyMnO47zPT9U0WSQB48NasxWNbXla3uYqo003D7emfHo')




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
