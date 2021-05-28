import React, { useContext, useState } from "react";
import { createUserDocument, db } from "../firebase";
import { UserContext } from "./Main";
import { firebase } from "../firebase";
import { Bar } from "react-chartjs-2";
import { Button, ButtonGroup, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";

const Profile = () => {
  const { user } = useContext(UserContext);
  const fullname = user.displayName;
  // const [mood,setMood] = useState();
  // const {happy,good,normal,sad,depressed} = useState()
  const [mood,setMood] =useState()
  // setMood(mood+1)
  const email = user.email;
  createUserDocument(user, { fullname });

  const [interests, setInterests] = useState([]);
  function onSubmit() {
    db.collection("users").doc(user.uid).update({
      fullname: fullname,
      email: email,
      interests: interests,
      mood:mood
//       mood:[{
//         happy:happy,
//         good:good,
//         normal:normal,
//         sad:sad,
// depressed:depressed
//       }]
       
      
    });
  }
  function onMood() {

  }

  return (
    <div>
      hi {user.displayName}
      <div>
        <img src={user.photoURL} alt={user.displayName} />
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
      <div>
        <input
          type="text"
          onChange={(e) => setInterests(e.target.value)}
          value={interests}
        />
        <label>Your interests</label>
        <button onClick={onSubmit}>Add Interests</button>
      </div>
      <div>
        <FormControl >
          <FormLabel>What was your mood today</FormLabel>
        <RadioGroup onChange={(e) => setMood(e.target.value)} value={mood}>
        <FormControlLabel value="happy" control={<Radio />} label="Happy"/>
        <FormControlLabel value="Normal" control={<Radio />} label="Normal"/>
        <FormControlLabel value="Good" control={<Radio />} label="Good"/>
        <FormControlLabel value="Sad" control={<Radio />} label="Sad"/>
        <FormControlLabel value="Depressed" control={<Radio />} label="Depressed"/>
        </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Bar
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          width={400}
          height={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default Profile;
