import React, { useState } from 'react';

const MyAccount = () => {
  // Returns a stateful value, and a function to update it.
  const [myName, setMyName] = useState('Steve');
  const [age, setAge] = useState(20);
  // const [isLoggedIn] = useState(false);

  const handleChangeName = () => {
    console.log('Change Name Btn Clicked');
    setMyName('John'); // updating the state
  }

  return (
    <div>
      <h3>MyAccount</h3>
      <p>Name: {myName}</p>
      <button type='button' onClick={handleChangeName}>
        Change Name
      </button>

      <p>Age: {age}</p>
      <button
        type='button'
        onClick={() => {
          setAge(30);
        }}>
        Update Age
      </button>

      <hr />
      <button type='button'>Login</button>
      <button type='button'>Logout</button>
    </div>
  );
};

export default MyAccount;
