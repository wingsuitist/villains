import { browser, element, by } from 'protractor/globals';

export class VillainsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vil-root h1')).getText();
  }
}
