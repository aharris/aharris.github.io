import { newSpecPage } from '@stencil/core/testing';
import { AppASpot } from '../app-a-spot';

describe('app-a-spot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppASpot],
      html: `<app-a-spot></app-a-spot>`,
    });
    expect(page.root).toEqualHtml(`
      <app-a-spot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-a-spot>
    `);
  });
});
