import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.scss',
  shadow: false,
})
export class AppBlog {
  render() {
    return (
      <Host>
        <div class="container">
          <ul>
            <li>
              <a class="blog-post" href="/blog/offline-mode-first">
                <app-a-spot smallText={true} name={'Offline Mode First'} image={"/assets/images/blog/offline_mode_first.png"}></app-a-spot>
              </a>
            </li>
          </ul>
        </div>
      </Host>
    );
  }

}
