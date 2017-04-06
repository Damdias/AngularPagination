import { TransHistoryPage } from './app.po';

describe('trans-history App', function() {
  let page: TransHistoryPage;

  beforeEach(() => {
    page = new TransHistoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
