import { VillainsPage } from './app.po';

describe('villains App', function() {
  let page: VillainsPage;

  beforeEach(() => {
    page = new VillainsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vil works!');
  });
});
