import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-work',
  styleUrl: 'app-work.scss',
  shadow: false
})
export class AppWork {
  render() {
    return (
      <div class="app-work container">
        <h2 class="h1 section-heading">
          Featured<br />
          Work
        </h2>
        <div class="row work-thumb-row">
          <a href="#" class="work-thumb-wrap col-xs">
            <img src="assets/images/wcg_thumb.jpg" alt="WCG" />
          </a>
          <a href="#" class="work-thumb-wrap col-xs">
            <img src="assets/images/wcg_thumb.jpg" alt="WCG" />
          </a>
        </div>
      </div>
    );
  }
}
