import admin from 'firebase-admin';

if(!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'donny-develog',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, ''),
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL: 'https://console.firebase.google.com/u/0/project/donny-develog/database/donny-develog-default-rtdb/data'
  });
}

export default admin.database();