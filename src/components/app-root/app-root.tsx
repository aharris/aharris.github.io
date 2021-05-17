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

        <header class="container header">
          <div class="lockup">
            <h1 class="h3 name">Ashton Harris</h1>
            <h2 class="subtitle job-title">UX Tech Lead</h2>
          </div>

          <nav>
            <ul class="nav">
              <li>
                <a href="#">Featured Work</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
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
