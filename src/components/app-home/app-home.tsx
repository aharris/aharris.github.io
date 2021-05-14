import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
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

        <h1 class="h1">
          Featured<br/>
          Work
        </h1>
      </div>
    );
  }
}
