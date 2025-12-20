import "./Display.css";
import { div } from "tagu-tagu";

export default function Display(props: { value: string }) {
	return div({ attr: { class: "component-display" } }, [div(props.value)]);
}
