import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//1.declaro una variable con estado
//2.añadir un onclick a cada luz.
//3.comprobar si className={color == "red" ? "selected":""}

export function Home() {
	const [color, setColor] = useState("red");
	return (
		<div className="trafficLight">
			<div
				className={"red light" + (color == "red" ? " selected" : "")}
				onClick={() => setColor("red")}
			/>
			<div
				className={
					"yellow light" + (color == "yellow" ? " selected" : "")
				}
				onClick={() => setColor("yellow")}
			/>
			<div
				className={
					"green light" + (color == "green" ? " selected" : "")
				}
				onClick={() => setColor("green")}
			/>
		</div>
	);
}
