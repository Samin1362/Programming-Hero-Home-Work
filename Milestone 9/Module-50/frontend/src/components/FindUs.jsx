import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div className='my-4'>
      <h1 className='text-2xl font-semibold mb-3'>Find Us On</h1>
      <button className='btn btn-outline w-full flex justify-start'><FaFacebook className='text-2xl'></FaFacebook> Facebook</button>
      <button className='btn btn-outline w-full flex justify-start'><FaTwitter className='text-2xl'></FaTwitter>Twitter</button>
      <button className='btn btn-outline w-full flex justify-start'><FaInstagram className='text-2xl'></FaInstagram>Instagram</button>
    </div>
  );
};

export default FindUs;