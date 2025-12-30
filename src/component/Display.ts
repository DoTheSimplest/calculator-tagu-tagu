import "./Display.css";
import { div, type Signal } from "tagu-tagu";

export default function Display(props: { value: Signal<string> }) {
	return div({ attr: { class: "component-display" } }, [div(props.value)]);
}
