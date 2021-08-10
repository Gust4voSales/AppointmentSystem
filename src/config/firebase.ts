import admin from 'firebase-admin'
const rootDir = process.env.NODE_ENV==="production" ? "../../../" : "../../"
const serviceAccount = require(rootDir+"service_account_key_firebase_admin.json");

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
