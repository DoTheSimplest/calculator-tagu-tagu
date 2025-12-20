import Button from "./Button";

import "./ButtonPanel.css";
import { div } from "tagu-tagu";

export default function ButtonPanel(props: {
	clickHandler: (name: string) => void;
}) {
	const handleClick = (buttonName: string) => {
		props.clickHandler(buttonName);
	};

	return div({ attr: { class: "component-button-panel" } }, [
		div([
			Button({ name: "AC", clickHandler: handleClick }),
			Button({ name: "+/-", clickHandler: handleClick }),
			Button({ name: "%", clickHandler: handleClick }),
			Button({ name: "+", clickHandler: handleClick, orange: true }),
		]),
		div([
			Button({ name: "7", clickHandler: handleClick }),
			Button({ name: "8", clickHandler: handleClick }),
			Button({ name: "9", clickHandler: handleClick }),
			Button({ name: "x", clickHandler: handleClick, orange: true }),
		]),
		div([
			Button({ name: "4", clickHandler: handleClick }),
			Button({ name: "5", clickHandler: handleClick }),
			Button({ name: "6", clickHandler: handleClick }),
			Button({ name: "-", clickHandler: handleClick, orange: true }),
		]),
		div([
			Button({ name: "1", clickHandler: handleClick }),
			Button({ name: "2", clickHandler: handleClick }),
			Button({ name: "3", clickHandler: handleClick }),
			Button({ name: "+", clickHandler: handleClick, orange: true }),
		]),

		div([
			Button({ name: "0", clickHandler: handleClick, wide: true }),
			Button({ name: ".", clickHandler: handleClick }),
			Button({ name: "=", clickHandler: handleClick, orange: true }),
		]),
	]);
}
