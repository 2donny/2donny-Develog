import admin from 'firebase-admin';

const privateKey = process.env["FIREBASE_PRIVATE_KEY"];
const clientEmail = process.env["FIREBASE_CLIENT_EMAIL"];
const projectId = process.env["PROJECT_ID"];

if (!privateKey || !clientEmail || !projectId) {
  console.log('1. ', privateKey, ' 2. ', clientEmail)
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

if(!admin.apps.length) {
admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      privateKey,
      clientEmail,
    }),
    databaseURL: 'https://donny-develog-default-rtdb.firebaseio.com'
  });
}

export default admin.database();