import { Session6Assignment4Page } from './app.po';

describe('session6-assignment4 App', () => {
  let page: Session6Assignment4Page;

  beforeEach(() => {
    page = new Session6Assignment4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
