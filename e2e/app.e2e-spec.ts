import { TendersWeb2Page } from './app.po';

describe('tenders-web-2 App', function() {
  let page: TendersWeb2Page;

  beforeEach(() => {
    page = new TendersWeb2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
