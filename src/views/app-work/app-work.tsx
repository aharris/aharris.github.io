import { Component, h } from '@stencil/core';

import { work } from '../../data/work';
import { Work } from '../../models/work.model';

@Component({
  tag: 'app-work',
  styleUrl: 'app-work.scss',
  shadow: false
})
export class AppWork {
  render() {
    return (
      <div id="work" class="app-work container">
        <h2 class="h1 section-heading">
          Featured<br />
          Work
        </h2>

        <div class="row work-thumb-row">
          {work.map((project: Work) => {
            return <div class="col-xs-12 col-sm-6 work-thumb-col">
            <a href={'work/' + project.id} class="work-thumb-wrap">
              <img src={project.thumb} alt={project.name} />
              <h3 class="work-title">{project.name}</h3>
            </a>
          </div>
          })}
        </div>
      </div>
    );
  }
}
