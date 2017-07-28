import { KveGroupPage } from './app.po';

describe('kve-group App', () => {
  let page: KveGroupPage;

  beforeEach(() => {
    page = new KveGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
