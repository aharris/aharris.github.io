import { newE2EPage } from '@stencil/core/testing';

describe('app-work-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-work-details></app-work-details>');

    const element = await page.find('app-work-details');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-work-details></app-work-details>');

    const element = await page.find('app-work-details >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
