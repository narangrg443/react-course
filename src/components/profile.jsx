import React from "react";
import Avatar from "./avatar"


const Profile = (props) => {
  const {
    name,
    age,
    style,
    email,
    src
  } = props;



  return (
    <div>
    <div class="contact-card" style={style}>
      <div className="top">
   <h4>Name: {name} </h4>
   <Avatar img={src} />
    </div>
       <div class="bottom">
        <div class="bottom-text">
          <p> Age: {age}</p>
        <p> Email:{email}</p>
    
        </div>
    </div>
    </div>
    </div>

  );
};

export default Profile;