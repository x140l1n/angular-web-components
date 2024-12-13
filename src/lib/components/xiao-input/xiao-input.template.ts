import { html } from 'lit/static-html.js';
import { XiaoInput } from './xiao-input';

export const template = (component: XiaoInput) => {
  return html`
    <div>
      <label for="input">${component.label}</label>
      <input
        id="input"
        type="${component.type}"
        placeholder="${component.placeholder}"
        .value=${component.value}
        @input="${component.handleInput}"
      />
    </div>
  `;
};
