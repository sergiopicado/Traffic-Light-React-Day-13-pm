import React, { useState } from "react";
import ReactDOM from "react-dom";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			shiningLight: null
		};
	}
	render() {
		let clickOnRed = " ";
		if (this.state.clickedLight == "red") clickOnRed = "redShadow";
		let clickOnYellow = " ";
		if (this.state.clickedLight == "yellow") clickOnYellow = "yellowShadow";
		let clickOnGreen = " ";
		if (this.state.clickedLight == "green") clickOnGreen = "greenShadow";
		return (
			<div id="semaphoreBody">
				<div id="lightsContainer">
					<i
						className={"fas fa-circle fa-7x " + clickOnRed}
						onClick={() => this.setState({ clickedLight: "red" })}
						id="redLight"></i>
					<i
						className={"fas fa-circle fa-7x " + clickOnYellow}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
						id="yellowLight"></i>
					<i
						className={"fas fa-circle fa-7x " + clickOnGreen}
						onClick={() => this.setState({ clickedLight: "green" })}
						id="greenLight"></i>
				</div>
			</div>
		);
	}
}
