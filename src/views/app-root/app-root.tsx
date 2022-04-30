import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <div>
        <div class="logo-wrap">
          <div class="logo">
            AH
          </div>
        </div>

        <app-header></app-header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/work/:name" component="app-work-details" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <footer>
          Insert Footer
        </footer>
      </div>
    );
  }
}
