import { Component, h } from '@stencil/core';

import Mail from '../../assets/icons/envelope.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Insta from '../../assets/icons/instagram.svg';


@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: false
})
export class AppFooter {
  render() {
    return (
      <footer class="container">
        <hr class="rhythm-8"/>

        <div class="row middle-xs center-xs">
          <div class="col-xs-12 col-sm profile-pic-col rhythm-6">
            <div class="profile-pic-wrap">
              <img class="profile-pic" src="/assets/images/about/ashton.png" alt="Photo of Ashton" />
            </div>
          </div>

          <div class="col-xs-12 col-sm rhythm-6">
            <ul class="contact-info">
              <li class="footer-line">
                <a class="subtitle footer-link" href="mailto:ashton.harris@gmail.com">
                  <span class='svg-container' innerHTML={Mail}></span> ashton.harris@gmail.com
                </a>
              </li>
              <li class="footer-line">
                <a class="subtitle footer-link" href="https://twitter.com/busypixels" target='_blank'>
                <span class='svg-container' innerHTML={Twitter}></span> @busypixels
                </a>
              </li>
              <li class="footer-line">
                <a class="subtitle footer-link" href="https://www.instagram.com/busypixels/" target='_blank'>
                <span class='svg-container' innerHTML={Insta}></span> @busypixels
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
