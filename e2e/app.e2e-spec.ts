import { github-cicdTemplatePage } from './app.po';

describe('github-cicd App', function() {
  let page: github-cicdTemplatePage;

  beforeEach(() => {
    page = new github-cicdTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
