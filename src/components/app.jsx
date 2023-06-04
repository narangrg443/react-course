import React, { useState } from "react";

const App = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const changeHandlerf = (e) => {
    setContact({ ...contact, fName: e.target.value });
  };

  const changeHandlerl = (e) => {
    setContact({ ...contact, lName: e.target.value });
  };

  const changeHandlere = (e) => {
    setContact({ ...contact, email: e.target.value });
  };

  return (
    <div className="app-container">
      <div>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
       </div>
      <form>
        <input
          name="fName"
          onChange={changeHandlerf}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={changeHandlerl}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={changeHandlere}
          placeholder="Email"
        />
<div className="btn-submit">
        <button>Submit</button>
</div>
      </form>
    </div>
  );
};

export default App;
