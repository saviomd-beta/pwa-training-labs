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

var pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/fwB9QtXKTj4:APA91bEuq46_kscbTleInlQXBJ6pRg3I4zEwpVIRU1eVlz96mSFB0FpVOj-hzzQBOeNvQ6UHi4SuVNC4TbZz8oE4mEcxwqS9-20DYg6T5f3_JPddbCjgJoJRsaliDKoz3NGpR2wtfNIC","expirationTime":null,"keys":{"p256dh":"BFgcWXpvZ5mWbzwn3MVQifoWE9OmDfSKALpb3ZXhJaC5WoVsQbkFA-4hhF7bc2iBENwTPiIyTyPbMS0J-HvJI14=","auth":"fKvWxuRAx_u_1UyOPZruww=="}};

// TODO 4.3a - include VAPID keys

var payload = 'Here is a payload!';

var options = {
  gcmAPIKey: 'AAAACB4sFbg:APA91bHP-RDspvcYjElO0V5DeeqINkYjVr6sE3FV-JizdI1_bHsN1DNcQPh88njNjEWJb8dAVqzkrYyZ7sPjXjhbgXU3lou5aEtW4PTrjZwxNIPmv94_NmEbI6FwHka3yyWnBRmnNQ4u',
  TTL: 60,

  // TODO 4.3b - add VAPID details

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
