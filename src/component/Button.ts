import { button, createContext, div, useContext } from "tagu-tagu";
import "./Button.css";

export const ClickHandlerContext = createContext<(name: string) => void>();

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
	const clickHandler = useContext(ClickHandlerContext);

	return div({ attr: { class: className.join(" ").trim() } }, [
		button(props.name, {
			on: {
				click: () => clickHandler(props.name),
			},
		}),
	]);
}
