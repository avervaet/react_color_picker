import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class ColorPicker extends Component {

	constructor () {
		super()
		this.state ={
			pickedColor: 'blue',
			displayedStyle: {
				margin: "0 auto",
				width: "50px",
				height: "50px",
				backgroundColor: "blue"
			}
		}

		this.changeColor = this.changeColor.bind(this)
	}

	setColor (color){
		this.setState({pickedColor: color});
	}

	changeColor () {
		this.setState({displayedStyle: {
					margin: "0 auto",
					width: "50px",
					height: "50px",
					backgroundColor: this.state.pickedColor
				}})
	}

	render () {

		return (
			<div>
				<h1>Hexa converter</h1>
				<div id="colorPicker" style={this.state.displayedStyle} />
				<input onChange={(e) => {this.setColor( e.target.value)}} type="text"/>
				<Button onClick={this.changeColor} variant="primary">converter</Button>
			</div>
			)
	}
}

export default ColorPicker;