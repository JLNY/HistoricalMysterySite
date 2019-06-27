import { HistoricalMysterySitePage } from './app.po';

describe('historical-mystery-site App', function() {
  let page: HistoricalMysterySitePage;

  beforeEach(() => {
    page = new HistoricalMysterySitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
