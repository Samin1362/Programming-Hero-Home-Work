import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const LoginCard = () => {
  return (
    <div className='border-2 p-2'>
      <h1 className='text-xl font-bold'>Login With</h1>
      <button className='btn btn-outline w-full my-4'><FcGoogle className='text-2xl' /> Login with Google</button>
      <button className='btn btn-outline w-full mb-4'><ImGithub className='text-2xl' /> Login with Github</button>
    </div>
  );
};

export default LoginCard;