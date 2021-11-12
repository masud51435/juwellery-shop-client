import { useEffect, useState } from "react"
import initializeFirebase from "../pages/login/firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeFirebase();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);
  

  const auth = getAuth();

  //registation
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError('');
        const newUsers = { email, displayName: name }
        setUser(newUsers);
        saveUser(email, name);
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace('/');
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //logIn
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  //observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false);
    })
    return () => unsubscribed;
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email]);


  //LogOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {

    }).catch((error) => {
      setError(error.message);
    })
      .finally(() => setIsLoading(false));

  }

  const saveUser = (email, displayName) => {
    const users = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then()
  }

  return {
    user, registerUser, logOut, loginUser, error, isLoading, admin
  }
}

export default UseFirebase;