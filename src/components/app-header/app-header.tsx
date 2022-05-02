import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: false
})
export class AppHeader {
  render() {
    return (
      <header class="container header">
        <div class="row middle-md">
          <div class="col-xs-12 col-md-6">
            <a href="/" class="lockup">
              <h1 class="h3 name">Ashton Harris</h1>
              <h2 class="subtitle job-title">UX Software Architect</h2>
            </a>
          </div>
          <div class="col-xs-12 col-md-6">
            <nav>
              <ul class="nav">
                <li>
                  <a href="/#work">Featured Work</a>
                </li>
                <li>
                  <a href="/#clients">Clients</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
