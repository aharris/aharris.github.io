import { Component, h, Prop } from '@stencil/core';
import { tools } from '../../data/tools';


@Component({
  tag: 'app-tool-card',
  styleUrl: 'app-tool-card.scss',
  shadow: false
})
export class AppToolCard {
  @Prop() tool: string;

  private currentTool;

  componentWillLoad() {
    console.log('this.tool: ', this.tool);

    this.findTool(this.tool);
  }

  render() {
    console.log('this.currentTool: ', this.currentTool);
    return (
      <div class="list-card">
        <div class="image-wrap">
          <img src={this.currentTool.img} alt={this.currentTool.name} style={{'padding': this.currentTool.padding}} />
        </div>

        <div class="h5 tool-name">
          {this.currentTool.name}
        </div>
      </div>
    );
  }

  private findTool(tool) {
    this.currentTool = tools[tool];
  }
}
