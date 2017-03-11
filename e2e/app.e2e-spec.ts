import { IdeeDashboardPage } from './app.po';

describe('idee-dashboard App', () => {
  let page: IdeeDashboardPage;

  beforeEach(() => {
    page = new IdeeDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
