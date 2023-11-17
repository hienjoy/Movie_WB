import React, { useState } from 'react';

function LoginText({ isLogedIn }) {
  return isLogedIn ? <span>로그인 해주세요!</span> : <span>환영합니다!</span>;
}

function LoginControl() {
  const [isLogedIn, setIsLogedIn] = useState(true);

  const handleLoginClick = () => {
    setIsLogedIn((prevIsLogedIn) => !prevIsLogedIn);
  };

  return (
    <div className="login_set">
      <button onClick={handleLoginClick}>
        {isLogedIn ? '로그인' : '로그아웃'}
      </button>
      <LoginText isLogedIn={isLogedIn} />
    </div>
  );
}

export default LoginControl;




/*function LoginText({isLogedIn}) {
  return isLogedIn ? (
    <span>로그인 해주세요!</span>
  ) : <span>환영합니다!</span>;
}


class LoginControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isLogedIn : true };

		this.handleLoginClick = this.handleLoginClick.bind(this);
	}

	handleLoginClick() {
		this.setState(prevState => ({
			isLogedIn : !prevState.isLogedIn
		}));
	}

  	handleLogoutClick() {
		this.setState(prevState => ({
			!isLogedIn : prevState.isLogedIn
		}));
	}

	render() {
		return (
            <div class="login_set">
            <button onClick={this.handleLoginClick}>
				{this.state.isLogedIn ? '로그인' : '로그아웃'}
			</button>
      <LoginText isLogedIn={this.state.isLogedIn}/>
            </div>
        );
	}
}

export default LoginControl;*/
