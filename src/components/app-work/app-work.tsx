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
          <div class="col-xs work-thumb-col">
            <a href="#" class="work-thumb-wrap">
              <img src="assets/images/thumbs/motif.jpg" alt="EY Motif Design System" />
              <h3 class="work-title">EY Motif Design System</h3>
            </a>
          </div>
          <div class="col-xs work-thumb-col">
            <a href="#" class="work-thumb-wrap ">
              <img src="assets/images/thumbs/wcg.jpg" alt="WIRB-Copernicus Group" />
              <h3 class="work-title">WIRB-Copernicus Group</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
