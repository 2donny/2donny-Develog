import admin from 'firebase-admin';
import { process } from 'remark';

const { private_key } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

if(!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'donny-develog',
      private_key: process.env.,
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    }),
    databaseURL: 'https://console.firebase.google.com/u/0/project/donny-develog/firestore/data~2F?hl=ko'
  });
}

export default admin.database();