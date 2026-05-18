// @ts-check
import { test, expect } from '@playwright/test';

test(`Amazon Laptop products check`, async ({ page }) => {
  await page.goto(`https://www.amazon.com/`);

  const textBox = page.locator(`#twotabsearchtextbox`);
  await textBox.fill("laptop");
  const subBtn = page.locator('#nav-search-submit-button');
  await subBtn.click();
});

test.skip('ok', ({page}) => {
  test.setTimeout(10); //wait 1ms
  test.step('check if 2 is equal to 3', ()=> { 
    test.fail(); //failt --> intentionally
    expect(2).toBe(3); //false --> fail
  })

  test.step('check if 2 is equal to 2', () => {
    //test.fail();
    expect(2).toBe(2);
  })

  test.step('check if 5 is equal to 5', () => {
    //test.fail();
    expect(5).toBe(5);
  })
})

test.fixme('test', async ({ page }) => {
  //test.setTimeout(1000);  //fails because won't do everything in 10s
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByLabel('HP 15, Intel Core Ultra 5 125H, 12 Tops (16GB DDR5, 512GB SSD) FHD, IPS, 15.6').click();
  await page.goto('https://www.amazon.in/gp/aw/d/B0F5B2X1SD/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=356330d266e915b51b71df5531f0e6b4&hsa_cr_id=0&qid=1779079882&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=Yi5JT05f62&ref_=sbx_s_sparkle_sbtcd_asin_0_title&pd_rd_w=zsThF&content-id=amzn1.sym.9269eab1-ae85-443b-9ec2-b2fa4ebaad05%3Aamzn1.sym.9269eab1-ae85-443b-9ec2-b2fa4ebaad05&pf_rd_p=9269eab1-ae85-443b-9ec2-b2fa4ebaad05&pf_rd_r=CKGCTGX38GH48P7KG6KK&pd_rd_wg=LUdH6&pd_rd_r=9f5a4b47-06c3-4152-beca-5bce65b3e5b8&th=1');
  await page.getByRole('heading', { name: 'HP 15, Intel Core Ultra 5' }).locator('#productTitle').click();
});

test.slow();  //triples the timeout to increase