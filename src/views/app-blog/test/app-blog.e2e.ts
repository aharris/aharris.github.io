import { newE2EPage } from '@stencil/core/testing';

describe('app-blog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-blog></app-blog>');

    const element = await page.find('app-blog');
    expect(element).toHaveClass('hydrated');
  });
});
