import admin from 'firebase-admin';

const privateKey = process.env["FIREBASE_PRIVATE_KEY"];
const clientEmail = process.env["FIREBASE_CLIENT_EMAIL"];
const projectId = process.env["PROJECT_ID"];

if(!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'donny-develog',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL: 'https://donny-develog-default-rtdb.firebaseio.com'
  });
}

export default admin.database();