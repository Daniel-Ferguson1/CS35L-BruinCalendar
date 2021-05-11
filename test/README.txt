Objective: add set of data ('documents') to the project automatically.

Before using, it's assumed:	
	The firebase packages are installed ($ npm install firebase).
	The firebase config is properly setup (./src/index.js).
		import firebase from 'firebase/app'
		import 'firebase/analytics'
		+ firebaseConfig stuff from the webconsole.
	Your project has firestore( you can check in the webconsole,
	if not, you can create.
	The policy rule is set in a manner that allows the user to
	write.
	You have the access to write in the firestore(not local).
With this assumption this should work for any react project file.
No extra module required.

Place 'test' folder into './src/'
	So to make './src/test'

From the web console(firebase setting), get one UID (copy).

Go to './src/test/testData.js'.

Replace all the values of the key, userId, with the copied UID (all of them).
	So it's 'userId: HERE' for each dict (or i don't know how to call it.)

In terminal.
	$ node ./src/populateFirestore.js

Go to the console and check it the test data is popluated in the firestore
(belong to the user).


// ====== In the context of our current project ===================== 

for the current project, the firebaseConfig shoud be:
```
var firebaseConfig = {
  apiKey: "AIzaSyAQ4QXGiyUkAViFC5nUmalWLWp1tK2uwnc",
  authDomain: "cs35l-6b371.firebaseapp.com",
  projectId: "cs35l-6b371",
  storageBucket: "cs35l-6b371.appspot.com",
  messagingSenderId: "67689612289",
  appId: "1:67689612289:web:49db3c0b25f7390138ec00",
  measurementId: "G-84LH8Y502Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

For the UID, you can either generate one user ID to test or anything from 'Authentication'
in the webconsole. This test data will be generated in a way that the data belongs to the
user. For example, in our proejct, userfoo@123.123 has UID, 'uwjGvRH7OPUrKb0uXgY53xZdGUK2'.


To allow (if not set) the authenticated user to write on Firestore (by the script), the
security rule ('Rules' in 'Firestore' in webconsole). The rule can be set:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
    
    match /user/{userId} {
    	allow write: if request.auth.udi == userId;
    }
  }
}
```
