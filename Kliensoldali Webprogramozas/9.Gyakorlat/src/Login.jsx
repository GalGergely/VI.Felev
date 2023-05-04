import { useEffect, useRef } from "react";
import { useState } from "react";

function Login ({ login }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const newErrors = {};

    if (username === '') {
      newErrors.username = 'Username is required'
    }
    if (password === '') {
      newErrors.password = 'Password is required'
    }
    
    setErrors(newErrors);
    if (Object.values(newErrors).length > 0) {
      return
    }

    if(login) {
      login(username);
    }
  }

  console.log(errors);
  
  useEffect(() => {
    usernameRef.current.focus();
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Felhasználónév: </label>
      <input
        ref={usernameRef}
        type="text"
        id="username"
        name="username"
        label="Felhasználónév"
      />
      <br />
      <label htmlFor="password">Jelszó: </label>
      <input
        ref={passwordRef}
        type="password"
        id="password"
        name="password"
        label="Jelszó"
      />
      <br />
      <button type="submit"> Elküld</button>
    </form>
  );
};

export default Login;
