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
        <app-a-spot name={this.data.name} image={this.data.image}></app-a-spot>

        <div class="description rhythm-9">
          <h2 class="h2">
            Description
          </h2>

          { this.data.description.map((paragraph: string) => <p class="indent">
            {paragraph}
          </p>)}
        </div>

        <div class="tools rhythm-9">
          <h2 class="h2">
            Tools
          </h2>

          <ul class="tools-list row middle-xs">
            {this.data.tools.map((tool: string) => <li class="col-xs-12 col-sm-6 col-md-4 rhythm-2">
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
