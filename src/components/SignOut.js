import firebase from 'firebase/compat/app';
import '../App.css';

const auth = firebase.auth();

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default SignOut;
