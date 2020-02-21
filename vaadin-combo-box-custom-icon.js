import { LitElement, html } from '@polymer/lit-element';
import '@vaadin/vaadin-combo-box/vaadin-combo-box';
class VaadinComboBoxCustomIcon extends LitElement {
    render() {
        return html`
            <dom-module id="custom-combo-box-icon" theme-for="vaadin-combo-box">
            <template>
             <style>
            /* To hide completely */
            :host([theme~="custom-icon"]) [part="toggle-button"]{
                display:none;
            }
            /* To display any icon */
            :host([theme~="custom-icon"]) [part="toggle-button"]::before {
                content: var(--lumo-icons-reload);
            }
            </style>
            </template>
            </dom-module>
            <vaadin-combo-box theme="custom-icon" clear-button-visible .items = "${["One", "Two"]}">

            </vaadin-combo-box>
        `;
    }
}
customElements.define("vaadin-combo-box-custom-icon", VaadinComboBoxCustomIcon);