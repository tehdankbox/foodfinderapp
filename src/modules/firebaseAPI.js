import * as firebase from 'firebase';

export const createUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .catch((error) => console.log('createUser error: ', error));
}



// .then((data) => {
//   getUserCb(data.uid, (user) => cb (user))
// })
