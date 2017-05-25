import { CardPage } from './app.po';

describe('card App', function() {
  let page: CardPage;

  beforeEach(() => {
    page = new CardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
