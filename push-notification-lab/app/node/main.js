/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var webPush = require('web-push');

var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/dT9VvSk8wn0:APA91bEwJT4iDC0BSLxQ5zBNA3PuV7BBBJPEDrxuNiuxPQrxEA4sru6E-AE56E_U5R_TsOIEdxf8EnngNI8g85khK1qkQT2EW2YZ1Ibm6sCCA-Uu5kcww8dtX4-ORBRCF7eNT4oc2jOg","expirationTime":null,"keys":{"p256dh":"BMKibYaiYJDWeWuXzEv9hh_bhcLeR-uGZKZiCV6I2EI2xHkM1ecD4X8pe9BXzsDZGjstPCy5o5jcc8-LCF_bmU8=","auth":"xXHnVSkIsQMJT0ev-cULkQ=="}};

var vapidPublicKey = 'BKtDY2Cfol1opIDS3ghaSvQVnUYUVic5XWH82lCe1mimOrXUS3LKAxTEhLfUK3UYjEzdWJbyvDh9P2oU9cPJGN0';
var vapidPrivateKey = 'pZOGzLSrke-cFLs7E3PSFf9FQ4yuCUnPMxji7FleApo';

var payload = 'Here is a payload!';

var options = {
  // gcmAPIKey: 'AAAACB4sFbg:APA91bHP-RDspvcYjElO0V5DeeqINkYjVr6sE3FV-JizdI1_bHsN1DNcQPh88njNjEWJb8dAVqzkrYyZ7sPjXjhbgXU3lou5aEtW4PTrjZwxNIPmv94_NmEbI6FwHka3yyWnBRmnNQ4u',
  TTL: 60,

  vapidDetails: {
    subject: 'mailto: teste@teste.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
