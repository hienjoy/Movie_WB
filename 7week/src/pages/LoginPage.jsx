import React,{useState} from 'react';

export default function LoginPage() {

  const [email,setEmail] = useState('');
  const [emailError,setEmailError]=useState(' ');
  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState(' ');
  const [btn,setBtn]=useState(true);


  const handleEmailChange = (event) =>{
    const regmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.com+$/;
    setEmail(event.target.value);
    if(!regmail.test(event.target.value)){
      setEmailError('올바른 이메일을 입력해주세요');
      setBtn(true);
    }
    else{
      setEmailError('');
      if(passwordError==='') setBtn(false);
    }
  }

  const handlePasswordChange = (event) =>{
    const regpassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&^])[A-Za-z\d$@$!%*#?&^]{8,}$/;
    setPassword(event.target.value);
    if(!regpassword.test(event.target.value)){
      setPasswordError('wrong');
      setBtn(true);
    }
    else{
      setPasswordError('');
      if(emailError==='') setBtn(false);
    }
  }

  return (
    <div>
      <form>
      <div className='form_box'>
        <div className="form_name">
          이메일과 비밀번호를 입력해주세요
        </div>

        <div className="input_info">
        <label>이메일 주소</label>
        <input type='text' name="mail" value={email} onChange={handleEmailChange}></input>
        <span className="error_msg">{emailError}</span>
        </div>
        
        <div className="input_info">
        <label>비밀번호</label>
        <input type='password' name="password" value={password} onChange={handlePasswordChange} placeholder='영문, 숫자, 특수문자 포함 8자 이상'></input>
        </div>
        <input type='submit' value='확인' className={ btn? 'light':'deep'} disabled={btn}></input>
      </div>
      </form>
    </div>
  )
}
