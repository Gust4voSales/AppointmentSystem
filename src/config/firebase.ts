import admin from 'firebase-admin'
const serviceAccount = require("../../service_account_key_firebase_admin.json");

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
