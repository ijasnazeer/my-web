import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const roles = ['Web Developer', 'Freelancer', 'Web Designer'];

    const typingInterval = setInterval(() => {
      const role = roles[currentRoleIndex];
      const currentText = currentRole;

      if (isTyping) {
        if (currentText === role) {
          setIsTyping(false);
        } else {
          setCurrentRole(role.slice(0, currentText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsTyping(true);
          setCurrentRole('');
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        } else {
          setCurrentRole(currentText.slice(0, currentText.length - 1));
        }
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex, currentRole, isTyping]);

  return (
    <div className='Home'>
        <div className='overlay'></div>
      <div className='container'>
        <h1 className='name'>IJAS NAZEER</h1>
        <h2>I'm a <span className='typing-effect'>{currentRole}</span></h2>
      </div>
    </div>
  );
}

export default Home;
