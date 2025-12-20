import { div, FromStates, useState } from "tagu-tagu";
import calculate from "../logic/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import "./App.css";

export default function App() {
	const state = useState({
		total: null,
		next: null,
		operation: null,
	} as {
		total?: string | null;
		next?: string | null;
		operation?: string | null;
	});

	const handleClick = (buttonName: string) => {
		state.set(calculate(state.get(), buttonName));
	};

	return div({ attr: { class: "component-app" } }, [
		Display({
			value: FromStates(
				[state],
				() => state.get().next ?? state.get().total ?? "0",
			),
		}),
		ButtonPanel({ clickHandler: handleClick }),
	]);
}
