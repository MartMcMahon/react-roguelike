import React, { Component } from 'react'

import Player from './player'

class PlayerLayer extends Component {
	render() {
		return (
			<div
				style={{
					width: '100%',
					height: '100%'
			}} >
				<Player />
			</div>
		)
	}
}

export default PlayerLayer;