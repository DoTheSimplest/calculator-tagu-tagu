import { div, FromStates, useState } from "tagu-tagu";
import calculate, { type Calculator } from "../logic/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import "./App.css";

export default function App() {
	const state = useState({
		total: null,
		next: null,
		operation: null,
	} as Calculator);

	const handleClick = (buttonName: string) => {
		const delta = calculate(state.get(), buttonName);
		state.set(Object.assign(state.get(), delta));
	};

	return div({ attr: { class: "component-app" }, data: { handleClick } }, [
		Display({
			value: FromStates(
				[state],
				() => state.get().next ?? state.get().total ?? "0",
			),
		}),
		ButtonPanel(),
	]);
}
