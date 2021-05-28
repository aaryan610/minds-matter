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
      <button
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Logout
          </button>
    </div>
  );
};
export default Profile;
