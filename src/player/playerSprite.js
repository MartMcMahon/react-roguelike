import React, { Component } from 'react'

import duck from '../assets/duck.png'

class PlayerSprite extends Component {
	render() {
		return (
			<div>
			<img 
				alt=' '
				src={duck}
				style={{
					display: 'relative',
					width: '100%',
				}}
			/>
			</div>
		)
	}
}

export default PlayerSprite;