import { newSpecPage } from '@stencil/core/testing';
import { AppBlog } from '../app-blog';

describe('app-blog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppBlog],
      html: `<app-blog></app-blog>`,
    });
    expect(page.root).toEqualHtml(`
      <app-blog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-blog>
    `);
  });
});
