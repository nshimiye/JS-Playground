import { AngularPlaygroundPage } from './app.po';

describe('angular-playground App', function() {
  let page: AngularPlaygroundPage;

  beforeEach(() => {
    page = new AngularPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
