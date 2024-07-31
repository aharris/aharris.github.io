import { newE2EPage } from '@stencil/core/testing';

describe('app-a-spot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-a-spot></app-a-spot>');

    const element = await page.find('app-a-spot');
    expect(element).toHaveClass('hydrated');
  });
});
