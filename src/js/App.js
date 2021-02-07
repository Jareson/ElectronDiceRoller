import React from "react";

function DiceArray(props) {
	return (
		<div id={`click-counter${props.value}`}>
			<span className="firstDie"></span>
			<span className="secondDie"></span>
			<span className="thirdDie"></span>
			<span className="total">0</span>
		</div>
	);
}

export default function App() {
	let diceAmount = 6;
	return (
		<div className="container">
			<h1 style={{ textAlign: "center" }}>Roll Your Stats!</h1>
			{createArray(diceAmount).map((value, index) => (
				<DiceArray key={index} value={value}></DiceArray>
			))}
			<br />
			<div className="text-center">
				<button className="btn btn-success" onClick={() => diceLogic()}>
					Roll The Dice!
				</button>
			</div>
		</div>
	);
}

function diceLogic() {
	new Audio("content/audio/diceRoll.mp3").play();
	for (let i = 1; i < 7; i++) {
		let diceRolls = rollDice();
		for (let j = 0; j < 3; j++) {
			let currentDie;
			switch (j) {
				case 0:
					currentDie = ".firstDie";
					break;
				case 1:
					currentDie = ".secondDie";
					break;
				case 2:
					currentDie = ".thirdDie";
					break;
			}
			$("#click-counter" + i)
				.find(currentDie)
				.css(
					"background-image",
					`url('./content/images/die${diceRolls[j]}.jpg')`
				)
				.css("background-size", "30px 30px")
				.css("background-repeat", "no-repeat")
				.css("background-position", "center")
				.css("padding", "30px 30px");
		}
		$("#click-counter" + i)
			.find(".total")
			.text(diceRolls[3]);
	}
}

function rollDice() {
	let diceArr = [];
	for (let i = 0; i < 4; i++) {
		diceArr.push(getRandomInt(1, 7));
	}
	diceArr.sort((a, b) => b - a).pop();
	diceArr.push(diceArr.reduce((a, b) => a + b, 0));
	return diceArr;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function createArray(length) {
	let createdArr = [];
	for (let i = 1; i < length; i++) {
		createdArr.push(i);
	}
	return createdArr;
}
