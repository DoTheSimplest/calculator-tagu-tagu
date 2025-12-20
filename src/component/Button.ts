import { button, div, useBinding } from "tagu-tagu";
import "./Button.css";

export default function Button(props: {
	name: string;
	orange?: boolean;
	wide?: boolean;
}) {
	const className = [
		"component-button",
		props.orange ? "orange" : "",
		props.wide ? "wide" : "",
	];

	return div({ attr: { class: className.join(" ").trim() } }, [
		button(props.name, {
			on: {
				click: useBinding(
					"handleClick",
					(handleClick) => () => handleClick(props.name),
				),
			},
		}),
	]);
}
