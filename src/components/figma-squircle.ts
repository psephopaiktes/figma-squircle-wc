import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getSvgPath } from "figma-squircle";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("figma-squircle")
export class FigmaSquircle extends LitElement {
	@property({ type: Number })
	width = 400;
	height = 300;
	radius = 100;
	smoothing = 1;

	render() {
		const d = getSvgPath({
			width: this.width,
			height: this.height,
			cornerRadius: this.radius,
			cornerSmoothing: this.smoothing,
		});

		return html`
		<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}"><path fill="#f00" d="${d}" /></svg>`;
	}

	static styles = css`
		svg {
			display: block;
			margin-top: 8px;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		"figma-squircle": FigmaSquircle;
	}
}
