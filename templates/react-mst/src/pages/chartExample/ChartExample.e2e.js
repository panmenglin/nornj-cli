import puppeteer from 'puppeteer';
import chromePaths from 'chrome-paths';
import { dev, e2e } from '@config/configs';

describe('ChartExample', () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(e2e.timeout);
    browser = await puppeteer.launch({
      headless: e2e.headless,
      args: ['--no-sandbox'],
      executablePath: chromePaths.chrome
    });
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto(`http://${dev.host}:${dev.port}/dist/#/ChartExample`, { waitUntil: 'networkidle2' });
  });

  afterEach(() => page.close());

  it('It should have some text in modal', async () => {
    await page.waitForXPath('//h2[contains(., "Summary")]', {
      timeout: e2e.pageTimeout
    });
    await page.click('div[class^="ant-row ChartExample.m__brandCompareItem"]:nth-of-type(1) span.ant-checkbox');
    const text = await page.evaluate(() => document.querySelector('div[class^="ChartExample.m__name"]').innerHTML);
    expect(text).toContain('品牌1');
  });

  afterAll(() => browser.close());
});
