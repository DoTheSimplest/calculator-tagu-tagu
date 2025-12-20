import { useState } from "tagu-tagu";
import calculate from "../logic/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import "./App.css";

export default function App() {
	const state = useState({
		total: null,
		next: null,
		operation: null,
	});

	const handleClick = (buttonName) => {
		state.set(calculate(state.get(), buttonName));
	};

	return div({ attr: { class: "component-app" } }, [
		Display({ value: state.next || state.total || "0" }),
		ButtonPanel({ clickHandler: handleClick }),
	]);
}
