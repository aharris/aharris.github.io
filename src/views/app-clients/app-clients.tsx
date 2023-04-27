import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-clients',
  styleUrl: 'app-clients.scss',
  shadow: false
})
export class AppClients {
  render() {
    return (
      <div id="clients" class="app-clients container">
        <h2 class="h1 section-heading">Clients</h2>

        <ul class="client-list">
          <li>Allin Interactive Latin America</li>
          <li>Amstar</li>
          <li>Apple On the Go</li>
          <li>Apple Vacations</li>
          <li>Avaya</li>
          <li>Azamara Club Cruises</li>
          <li>Barclays</li>
          <li>Blue Mountain</li>
          <li>Boehringer Ingelheim</li>
          <li>Breathless</li>
          <li>Carrier</li>
          <li>Celebrity Cruises</li>
          <li>Comcast</li>
          <li>Corteva Agriscience</li>
          <li>Dreams Resort and Spa</li>
          <li><a href="work/motif">EY</a></li>
          <li>First Key Creations</li>
          <li>Flamingo Beach Resort &amp; Spa</li>
          <li>Keating's River Grill</li>
          <li>KeyLime Cove</li>
          <li>Liberty Global</li>
          <li>Maritz</li>
          <li>Media Giraffes</li>
          <li>MetTel</li>
          <li>MMA MarketLink</li>
          <li>Mobile Monday</li>
          <li>Movitas</li>
          <li>Nintendo</li>
          <li>Nocturnal Skate Shop</li>
          <li>O'Malley's Pub'</li>
          <li>PNC</li>
          <li>Pocono Mountains</li>
          <li>Psychic Source</li>
          <li>Quick Chek</li>
          <li>Rock &amp; Roll Hall of Fame</li>
          <li>Royal Caribbean International</li>
          <li>Saint Clare's Health System</li>
          <li>Secrets Resort's and Spa</li>
          <li>Shawnee Mountain</li>
          <li>Sheraton</li>
          <li>Sports Core</li>
          <li>St. Petersburg Clearwater</li>
          <li>The American Club Resort</li>
          <li>The Children's Journey</li>
          <li>The Closet Therapy</li>
          <li>The Shawnee Inn</li>
          <li>The Source</li>
          <li>Traveler Connect</li>
          <li>Wialan</li>
          <li><a href="work/wcg">WCG IRB</a></li>
        </ul>
      </div>
    );
  }
}
