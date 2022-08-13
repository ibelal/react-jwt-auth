import React from "react";
import axios from "axios";

async function login(payload) {
  return await axios
    .post("https://reqres.in/api/login", payload)
    .then((response) => response)
    .catch((err) => console.log(err));
}

function Login({ setToken }) {
  const handleSubmit = async (email, password) => {
    const loginPayload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
      roles: [1, 2],
    };
    // api response
    const response = await login(loginPayload);
    setToken(loginPayload);
  };

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const [email, password] = event.target.children;
          handleSubmit(email, password);
        }}
      >
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Login;
