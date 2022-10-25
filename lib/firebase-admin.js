import * as admin from 'firebase-admin'

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://robbie-crenshaw.firebaseio.com'
  })
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }