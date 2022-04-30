import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Work } from '../../models/work.model';
import { work } from '../../data/work';

@Component({
  tag: 'app-work-details',
  styleUrl: 'app-work-details.scss',
  shadow: false
})
export class AppWork {
  @Prop() match: MatchResults;

  public data: Work = this.getData();

  render() {
    return (
      <div class="app-work container">
        <h2 class="h1 section-heading">
          {this.data.name}
        </h2>
      </div>
    );
  }

  private getData() {
    return work.find((project: Work) => project.id === this.match.params.name);
  }
}
