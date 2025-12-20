import { button, div } from "tagu-tagu";
import "./Button.css";

export default function Button(props: {
	name: string;
	orange?: boolean;
	wide?: boolean;
	clickHandler: (name: string) => void;
}) {
	const handleClick = () => {
		props.clickHandler(props.name);
	};

	const className = [
		"component-button",
		props.orange ? "orange" : "",
		props.wide ? "wide" : "",
	];

	return div({ attr: { class: className.join(" ").trim() } }, [
		button({ on: { click: handleClick } }, props.name),
	]);
}
