import puppeteer from 'puppeteer';
import chromePaths from 'chrome-paths';
import { dev, e2e } from '@config/configs';

describe('EmptyExample', () => {
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
    await page.goto(`http://${dev.host}:${dev.port}/dist/#/EmptyExample`, { waitUntil: 'networkidle2' });
  });

  afterEach(() => page.close());

  it('It should have title text', async () => {
    await page.waitForSelector('h2', {
      timeout: e2e.pageTimeout
    });
    const text = await page.evaluate(() => document.querySelector('h2').innerHTML);
    expect(text).toContain('示例页面 emptyExample');
  });

  afterAll(() => browser.close());
});
