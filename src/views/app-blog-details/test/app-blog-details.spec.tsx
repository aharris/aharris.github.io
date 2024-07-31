import { newSpecPage } from '@stencil/core/testing';
import { AppBlogDetails } from '../app-blog-details';

describe('app-blog-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppBlogDetails],
      html: `<app-blog-details></app-blog-details>`,
    });
    expect(page.root).toEqualHtml(`
      <app-blog-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-blog-details>
    `);
  });
});
