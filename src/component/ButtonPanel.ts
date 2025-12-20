import Button from "./Button";

import "./ButtonPanel.css";
import { div } from "tagu-tagu";

export default function ButtonPanel() {
	return div({ attr: { class: "component-button-panel" } }, [
		div([
			Button({ name: "AC" }),
			Button({ name: "+/-" }),
			Button({ name: "%" }),
			Button({ name: "÷", orange: true }),
		]),
		div([
			Button({ name: "7" }),
			Button({ name: "8" }),
			Button({ name: "9" }),
			Button({ name: "x", orange: true }),
		]),
		div([
			Button({ name: "4" }),
			Button({ name: "5" }),
			Button({ name: "6" }),
			Button({ name: "-", orange: true }),
		]),
		div([
			Button({ name: "1" }),
			Button({ name: "2" }),
			Button({ name: "3" }),
			Button({ name: "+", orange: true }),
		]),

		div([
			Button({ name: "0", wide: true }),
			Button({ name: "." }),
			Button({ name: "=", orange: true }),
		]),
	]);
}
