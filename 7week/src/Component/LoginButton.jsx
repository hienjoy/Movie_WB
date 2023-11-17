import React from 'react';
import {useNavigate} from 'react-router-dom';
//import LoginPage from '../pages/LoginPage';

export default function LoginControl() {
  const navigate = useNavigate();
  const loginNavigate = () =>{
    navigate('/login');
  };

return (
    <div className="login_set">
      <button onClick={loginNavigate}>로그인</button>
    </div>
)
};


