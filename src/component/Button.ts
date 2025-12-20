import { button, div } from "tagu-tagu";
import "./Button.css";
import { waitForData } from "tagu-tagu/src/data/data";

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

	let handleClickWithName: (name: string) => void;
	const handleClick = () => {
		handleClickWithName?.(props.name);
	};

	return div({ attr: { class: className.join(" ").trim() } }, [
		button(props.name, { on: { click: handleClick } }, (b) => {
			waitForData(b, {
				handleClick: (data) => {
					handleClickWithName = data;
				},
			});
		}),
	]);
}
