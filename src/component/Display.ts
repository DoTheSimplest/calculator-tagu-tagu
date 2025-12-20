import "./Display.css";
import { div, type State } from "tagu-tagu";

export default function Display(props: { value: State<string> }) {
	return div({ attr: { class: "component-display" } }, [div(props.value)]);
}
