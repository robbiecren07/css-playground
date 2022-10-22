import * as admin from 'firebase-admin'

let serviceAccount = require("./robbie-crenshaw-adminsdk.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://robbie-crenshaw.firebaseio.com'
  })
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }