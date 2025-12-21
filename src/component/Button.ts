import { button, div, useBinding } from "tagu-tagu";
import "./Button.css";

export const handleButtonClick = "handleButtonClick";

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
					handleButtonClick,
					(handleClick) => () => handleClick(props.name),
				),
			},
		}),
	]);
}
