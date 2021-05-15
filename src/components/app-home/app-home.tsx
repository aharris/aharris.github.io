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
          {/* <p>
            Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
            <a href="https://stenciljs.com">stenciljs.com</a> to get started.
          </p>

          <stencil-route-link url="/profile/stencil">
            <button>Profile page</button>
          </stencil-route-link> */}

          <div class="logo-wrap">
            <div class="logo">
              AH
            </div>
          </div>

          <div class="a-spot">
            <p class="quote">&gt; {this.aSpotText}<span class="blink">|</span></p>
            <p class={{
              author: true,
              show: this.showAuthor
            }}>-- {this.aSpotAuthor}</p>
          </div>

          <h2 class="h1">
            Featured<br/>
            Work
          </h2>
        </div>

        <app-clients></app-clients>
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
