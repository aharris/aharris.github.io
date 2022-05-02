import { newE2EPage } from '@stencil/core/testing';

describe('app-tool-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tool-card></app-tool-card>');

    const element = await page.find('app-tool-card');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tool-card></app-tool-card>');

    const element = await page.find('app-tool-card >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
