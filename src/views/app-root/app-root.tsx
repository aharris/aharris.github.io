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
              <stencil-route url="/work/:name" component="app-work-details" exact={true} />
              <stencil-route url="/blog" component="app-blog" exact={true} />
              <stencil-route url="/blog/offline-mode-first" component="app-blog-details" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <div class="rhythm-20">
          <app-footer></app-footer>
        </div>
      </div>
    );
  }
}
