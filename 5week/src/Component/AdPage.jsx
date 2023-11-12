import React from 'react';
import Ad from './Ad';

class AdPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = { showAd : true };

		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => ({
			showAd : !prevState.showAd
		}));
	}

	render() {
		return (
            <div>
            <Ad showAd={this.state.showAd} />
            <button onClick={this.handleToggleClick}>
				{this.state.showAd ? '광고 안 보기' : '광고 보기'}
			</button>
            </div>
        );
	}
}

export default AdPage;