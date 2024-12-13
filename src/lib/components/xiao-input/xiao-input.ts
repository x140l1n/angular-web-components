import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { template } from './xiao-input.template';

type InputType = 'text' | 'email' | 'password';

@customElement('xiao-input')
export class XiaoInput extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) type: InputType = 'text';

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    // this.dispatchEvent(
    //   new CustomEvent('onValueChange', {
    //     detail: {
    //       value: input.value,
    //     },
    //   }),
    // );
  }

  render() {
    return template(this);
  }
}
