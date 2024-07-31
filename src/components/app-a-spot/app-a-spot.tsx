import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-a-spot',
  styleUrl: 'app-a-spot.scss',
  shadow: false,
})
export class AppASpot {
  @Prop() name: string;
  @Prop() image: string;
  @Prop() smallText: boolean;

  render() {
    const h1Classes = ['title'];
    if (this.smallText) {
      h1Classes.push('small');
    }

    return (
      <Host>
        <section class="image">
          <h1 class={h1Classes.join(' ')}>
            {this.name}
          </h1>

          <img src={this.image} alt={this.name} />
        </section>
        <slot></slot>
      </Host>
    );
  }

}
