import React from "react";

function DiceArray(props) {
	return (
		<div id={`click-counter${props.value}`}>
			<span className="firstDie"></span>
			<span className="secondDie"></span>
			<span className="thirdDie"></span>
			<span className="total"></span>
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
			{/* <div id="click-counter2">
				<span className="firstDie"></span>
				<span className="secondDie"></span>
				<span className="thirdDie"></span>
				<span className="total"></span>
			</div>
			<div id="click-counter3">
				<span className="firstDie"></span>
				<span className="secondDie"></span>
				<span className="thirdDie"></span>
				<span className="total"></span>
			</div>
			<div id="click-counter4">
				<span className="firstDie"></span>
				<span className="secondDie"></span>
				<span className="thirdDie"></span>
				<span className="total"></span>
			</div>
			<div id="click-counter5">
				<span className="firstDie"></span>
				<span className="secondDie"></span>
				<span className="thirdDie"></span>
				<span className="total"></span>
			</div>
			<div id="click-counter6">
				<span className="firstDie"></span>
				<span className="secondDie"></span>
				<span className="thirdDie"></span>
				<span className="total"></span>
			</div> */}
			<br />
			<div className="text-center">
				<button className="btn btn-success" id="countbtn">
					Roll The Dice!
				</button>
			</div>
		</div>
	);
}
