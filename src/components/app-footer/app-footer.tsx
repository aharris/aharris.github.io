import { Component, h } from '@stencil/core';

import Mail from '../../assets/icons/envelope.svg';


@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: false
})
export class AppFooter {
  render() {
    console.log('mail: ', Mail);
    return (
      <footer>
        <hr class="rhythm-8"/>

        <div class="row">
          <div class="col-xs">
            <div class="profile-pic-wrap">
              <img class="profile-pic" src="/assets/images/about/ashton.png" alt="Photo of Ashton" />
            </div>
          </div>
          <div class="col-xs footer-line">
            <div class='svg-container' innerHTML={Mail}></div>
            <a href="mailto:ashton.harris@gmail.com">ashton.harris@gmail.com</a>
          </div>
        </div>
      </footer>
    );
  }
}
