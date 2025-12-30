import { div, useComputed, useState } from "tagu-tagu";
import calculate, { type Calculator } from "../logic/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import "./App.css";
import { handleButtonClick } from "./Button";

export default function App() {
	const state = useState<Calculator>({
		next: null,
		operation: null,
		total: null,
	});

	const handleClick = (buttonName: string) => {
		const delta = calculate(state.get(), buttonName);
		state.set(Object.assign(state.get(), delta));
	};

	return div(
		{
			attr: { class: "component-app" },
			data: { [handleButtonClick]: handleClick },
		},
		[
			Display({
				value: useComputed(() => state.get().next ?? state.get().total ?? "0"),
			}),
			ButtonPanel(),
		],
	);
}
