import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbh7PbNqb9oZSm\nMrdBTBRm8qLpNENQRo47JFBwXssfJTmn2UPr76lmDYhIWMEqYG82u78yKlwCwm3n\napH1T8c2kMGHlAs6iELj07rr9tb3rvcC2JyVVjnP0vixf8RqV070cLb6yvrIRxyS\nUSfDsOX0/Ow2AN18mj34mvK9B9Sl+Z+PvyFfyQOuGZu8Z7U2MCDxldmpPJnb3qey\nOu4i6pmttDNKwA/FgPdqD9DPKxDRV1hMSMz+K/AjHj4U/7LnTTSyHoNjNJNLyJ1E\ndoTLZiPIY2fsqKcVZoTmoJP/lqqQuRYL+k6rM6VwMqysjDxBjm3xSgH7nmbK9zWb\nuGb1q2aBAgMBAAECggEAAL6tVp1H7VXxpz3YqpyMryvglA2M130ZOSe3vm+SwdrL\njMiZAC8AMlmosH/dKaFuRgZWns1z2OUe+6AXua8iQK9bML1/xtNHGa3JTDaoHaG7\naT79U9+Gzot9xc4dPiGx2IbmO3ZQ/Dkdiw75SewKzNZZaxrqpXaCglE1+3wQPtp7\nkRZ45RY9xSs1SLm4pS59wqYcuAA1ekc6Mx9FDp0zjGris7uL7nNvKxr+ow1Dvho5\nhkkEZx+OEyWnfmu7WWoSYJufmmyxoBk1SlyGnO5Ax+pralUvAYG6InhxSe7dOg5Q\nIwk2hgLruBXnXHcTdNSws+KeO5U/NUBbN9TVch62dwKBgQD+DiLg9WlVrwp3Phaa\nsfO58+yMRG+eaYTXzacVqT09jAXyowE7X9GAi/+aJIayIin+k9QglLns4+IgXbu6\ngiwxMir/qVz3HaDHTO/SsEfq9aS/emj9F+TolalsTpAnrA4vg29UNWsGMz0ISTXM\nbZZ1lnL2ux8n/Nx4ZH2TutClYwKBgQDdNeiWHo9gYxUzNTP5+xLwqB5P0B6VvF+t\nHa8wMK7mULaVzDfwRyqEJNhX1hf7vkOSiLX/uDGO+swyBh3Us20TKhibRbZUTHIO\n4Ezp1GKQILhbGdBBfwGSOHPa3K5VwWzBSjdwyScXn79thfLwjVLiZKr+hUUELEXI\nmEpgpX8LywKBgHet/x5MXb/AgsSjmhBrzi4GS6PURWSxvqPOvGxG2pOY1+Byi40F\n2XKeAN4DYPSfhXro9uAWT/PZclfe8CWvVtQiFwFzLlk3OttIUh3Fb0uvRlnxd23r\nCKnMfxCHff9CXThiyVo5A97a2mCB5HcWFO/13NiAU/AJfW61oDaspceTAoGBANoV\nwrb1a/7n0EfK5PJH4HVYGYIwOWb/7wd6I3QMGvI/krJ+QovlbXoX5R47mSt8eZvm\noh95FYrToSqUMya2ugtRzi6OfOIA99XItqs00vMq/vX5rgJUV1UzyKx2Mn2jEzhA\nlgXgmmTE/nHYxBj6C0PdYWNKOi+SAj5wPauonWcfAoGABDOVws1kZL3qmPuYk+Ok\n2pCEBBJ1m520jzZggQSVXv05ZNEFbSQ+DHMNahbAdH1wdI2cuURWmpvRQepoQ3mU\n7otmqg9ITrv5VgUSJ8bDN+EJfFzQ3awiXC9pb3zRZpLDNbI2p7IBT4fGVGjYl2Zw\nV7OgyhXmfV9LolR1h0d0cnU=\n-----END PRIVATE KEY-----\n",
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://robbie-crenshaw.firebaseio.com'
  })
}

const db = admin.firestore()
const auth = admin.auth()

export { db, auth }