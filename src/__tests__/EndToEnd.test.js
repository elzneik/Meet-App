import puppeteer from 'puppeteer';

// Define a scope (describe); Define tests; Use beforeAll to call functions used in all tests
describe('show/hide an event details', () => {

  beforeAll(async () => {
    jest.setTimeout(30000);
  });

  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
    browser.close();
  });

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    await page.click('.event .details-btn');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });

});

/*
describe ("hide/show an event details", () => {
    let browser
    let page
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250, // slow down by 250ms
            ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
          });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    })

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
        browser.close();
      });

      test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeDefined();
        browser.close();
      });

      test('User can collapse an event to hide its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
      });
});
*/
