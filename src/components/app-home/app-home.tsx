import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  @State() aSpotText: string = '';

  componentDidLoad() {
    this.typeString('Apply constraints until an elegant solution remains');
  }

  render() {
    return (
      <div class="app-home container">
        {/* <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link> */}

        <div class="logo-wrap">
          <div class="logo">
            AH
          </div>
        </div>

        <p class="a-spot"> &gt; {this.aSpotText}<span class="blink">|</span></p>

        <h2 class="h1">
          Featured<br/>
          Work
        </h2>
      </div>
    );
  }

  private typeString(str: string) {
    this.aSpotText = '';

    const textElements = str.split('');

    const delay = 75;
    const multiplier = 100;

    textElements.forEach((letter, idx) => {
      setTimeout(() => {
        this.aSpotText += letter;
      // eslint-disable-next-line no-mixed-operators
      }, multiplier + idx * delay);
    });
  }
}
