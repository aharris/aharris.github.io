import { newE2EPage } from '@stencil/core/testing';

describe('app-blog-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-blog-details></app-blog-details>');

    const element = await page.find('app-blog-details');
    expect(element).toHaveClass('hydrated');
  });
});
