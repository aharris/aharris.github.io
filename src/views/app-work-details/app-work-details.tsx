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
      <section class="app-work container">
        <div class="image">
          <h1 class="h1 work-title">
            {this.data.name}
          </h1>

          <img src={this.data.image} alt={this.data.name} />
        </div>

        <div class="tools">
          <h2 class="h2">
            Tools
          </h2>

          <ul class="tools-list row middle-xs">
            {this.data.tools.map((tool: string) => <li class="col-xs-4 rhythm-2">
              <app-tool-card tool={tool}></app-tool-card>
            </li>)}
          </ul>
        </div>
      </section>
    );
  }

  private getData() {
    return work.find((project: Work) => project.id === this.match.params.name);
  }
}
