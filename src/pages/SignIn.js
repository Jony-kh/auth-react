import React from 'react';
import { useHistory } from 'react-router';

export default function SignIn() {
  const history = useHistory();
  const redirect = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={redirect}>Go home</button>
    </div>
  )
}
