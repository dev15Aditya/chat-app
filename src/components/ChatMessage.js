import firebase from 'firebase/compat/app';
import '../App.css';

const auth = firebase.auth();

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
          }
          alt="pic"
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
