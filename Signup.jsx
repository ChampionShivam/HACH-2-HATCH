import React from 'react'
import signupImg from "../assets/signup.png";
import Template from './Template';


function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Building Block by Block for your better Future "
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup