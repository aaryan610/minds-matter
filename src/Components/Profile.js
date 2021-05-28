import React, { useContext } from "react";
import { createUserDocument } from "../firebase";
import { UserContext } from "./Main";
import {firebase} from '../firebase'
const Profile = () => {
  const { user } = useContext(UserContext);
  const fullname = user.displayName;
 createUserDocument(user, { fullname });
  return (
    <div>
      hi {user.displayName}
      <div>
        <img src={user.photoURL} />
      </div>
      <a href="/login">
      <button
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </button>
          </a>
    </div>
  );
};
export default Profile;
