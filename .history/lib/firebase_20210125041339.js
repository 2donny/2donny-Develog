import admin from 'firebase-admin';

if(!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'donny-develog',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL: 'https://console.firebase.google.com/u/0/project/donny-develog/database/donny-develog-default-rtdb/data'
  });
}

export default admin.database();

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});