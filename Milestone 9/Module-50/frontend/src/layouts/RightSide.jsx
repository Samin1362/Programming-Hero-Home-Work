import React from 'react';
import LoginCard from '../components/LoginCard';
import FindUs from '../components/FindUs';

const RightSide = () => {
  return (
    <div>
      {/* login  */}
      <div>
        <LoginCard></LoginCard>
      </div>

      {/* find us on */}
      <div>
        <FindUs></FindUs>
      </div>
    </div>
  );
};

export default RightSide;