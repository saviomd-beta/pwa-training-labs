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
(function() {
  'use strict';

  self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
    // TODO 3.4: Skip waiting
  });

  self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
  });

  // I'm a new service worker

  // TODO - 4: Add fetch listener

})();
