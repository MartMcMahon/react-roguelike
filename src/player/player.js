import React, { Component } from 'react';

import PlayerSprite from './playerSprite'
import { relative } from 'upath';

class Player extends Component {

	constructor(props) {
		super(props)
		this.state = {
			player: {
				pos: [ 20, 30 ]
			}
		}
	}

	onKeyDown = (e) => {
		e.preventDefault()
		switch(e.key) {
			default:
				console.log('false')
				break
			case 'w':
			case 'ArrowUp':
				this.addVector( [0, -1] )
				break
			case 'ArrowDown':
				this.addVector( [0, 1] )
				break
			case 'ArrowLeft':
				this.addVector( [-1, 0] )
				break
			case 'ArrowRight':
				this.addVector( [1, 0] )
				break
			case ' ':
				break
		}
	}

	arrowUp = () => {
		console.log('up')
			let vec = [0, -10]
			let x = this.state.player.pos[0]
			let y = this.state.player.pos[1]
			this.setState({
				player: {
					pos: [ x + vec[0], y + vec[1] ]
				}
			})
		}
		
	addVector = (vec) => {
		let speed = 10;
		const x = this.state.player.pos[0]
		const y = this.state.player.pos[1]
		console.log(vec)
		vec = [ vec[0]*speed, vec[1]*speed ];
		console.log(vec)
		this.setState({
			player: {
				pos: [ x + vec[0], y + vec[1] ]
			}
		})
	}

	componentWillMount() {
    document.addEventListener("keydown", this.onKeyDown.bind(this))
	}

  render() {
		// console.log (this.state.player.pos)
    return (
			<div style={{ 
				position: 'relative',
				left: this.state.player.pos[0],
				top: this.state.player.pos[1],
				
				height: '50px',
				width: '50px',
			}}>
				<PlayerSprite />
      </div>
    );
  }
}

export default Player