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
        <header class="container header">
          <h1 class="h3">Ashton Harris</h1>

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
