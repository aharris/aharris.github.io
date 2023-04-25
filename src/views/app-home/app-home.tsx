import { Component, h, State } from '@stencil/core';
import { quotes } from '../../data/quotes';
import { Quotes } from '../../models/quotes.model';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  @State() aSpotText: string = '';
  @State() aSpotAuthor: string = '';
  @State() showAuthor: boolean;

  componentDidLoad() {
    const INTERVAL_TIME = 20000;

    this.typeString(this.getRandomQuote(quotes));

    setInterval(() => {
      this.typeString(this.getRandomQuote(quotes));
    }, INTERVAL_TIME);
  }

  render() {
    return (
      <div>
        <div class="app-home container">
          <div class="a-spot">
            <p class="quote">&gt; {this.aSpotText}<span class="blink">|</span></p>
            <p class={{
              author: true,
              show: this.showAuthor
            }}>-- {this.aSpotAuthor}</p>
          </div>
        </div>

        <div class="rhythm-20">
          <app-work></app-work>
        </div>

        <div class="rhythm-20">
          <app-clients></app-clients>
        </div>

        <div class="rhythm-20">
          <app-footer></app-footer>
        </div>
      </div>
    );
  }

  private getRandomQuote = (quotesList: Quotes[]) => quotesList[Math.floor(Math.random() * quotesList.length)]


  private typeString(quoteObj: Quotes) {
    this.aSpotText = '';
    this.aSpotAuthor = quoteObj.author;
    this.showAuthor = false;

    const textElements = quoteObj.quote.split('');

    const delay = 50;
    const multiplier = 100;

    textElements.forEach((letter, idx) => {
      setTimeout(() => {
        this.aSpotText += letter;

        if (idx === textElements.length - 1) {
          this.showAuthor = true;
        }

      // eslint-disable-next-line no-mixed-operators
      }, multiplier + idx * delay);
    });
  }
}
