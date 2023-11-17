import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function NotFound(){
  const navigate = useNavigate();
  const onClickHome = () =>{
    navigate(`/`,{
      state:{}
    });
  };

  return(
    <div style={{marginLeft:'250px', marginTop: '50px' }}>
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
        <p style={{color:'red', textDecoration:'none', cursor:'pointer'}} onClick={onClickHome}>메인 페이지로 이동</p>
      </div>
  )
}

/*export default function NotFound() {
  return (
    <div>
      <div style={{marginLeft:'250px', marginTop: '50px' }}>
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <p>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
        <Link to ="/" style={{color:'red', textDecoration:'none'}}>메인 페이지로 이동</Link>
      </div>
    </div>
  )
}*/
