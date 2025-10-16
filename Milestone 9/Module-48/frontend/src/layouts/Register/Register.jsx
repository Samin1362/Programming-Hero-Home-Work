import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "../../main";
import { use } from "react";


const Register = () => {

  const userInfo = use(AuthContext);
  console.log(userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((e) => console.log(e));

  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <form onSubmit={handleSubmit} className="fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button type="submit" className="btn btn-neutral mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
