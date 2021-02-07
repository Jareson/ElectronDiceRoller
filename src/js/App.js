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
	return (
		<div className="container">
			<h1 style={{ textAlign: "center" }}>Roll Your Stats!</h1>
			<DiceArray value="1"></DiceArray>
			<DiceArray value="2"></DiceArray>
			<DiceArray value="3"></DiceArray>
			<DiceArray value="4"></DiceArray>
			<DiceArray value="5"></DiceArray>
			<DiceArray value="6"></DiceArray>
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
	console.log("Test");
	new Audio("audio/diceRoll.mp3").play();
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
				.css("background-image", `url('./images/die${diceRolls[j]}.jpg')`)
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
