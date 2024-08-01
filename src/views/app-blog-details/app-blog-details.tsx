import { Component, Host, h } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-dart.js';

@Component({
  tag: 'app-blog-details',
  styleUrl: 'app-blog-details.scss',
  shadow: false,
})
export class AppBlogDetails {
  private _html: string = '';

  componentWillRender() {
    this._html = Prism.highlight(`
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
      `, Prism.languages.dart, 'dart');
  }

  render() {
    return (
      <Host>
        <section class="blog-post container">
          <app-a-spot name={'Offline Mode First'} image={"/assets/images/blog/offline_mode_first.png"}></app-a-spot>

          <div class="blog-container-wrapper">
            <div class="blog-container">
              <p>
                In todays digital ecosystem we are very lucky to have fairly reliable internet connectivity in many parts of the world.
                However, this is not always the case for the user base of our applications. Take a construction worker building in a rural location, for example.
                They still need access to their information on the job site just as they would on their home wifi.
                This can be accomplished by implementing offline mode into your application.
                This allows the user to still access the data stored locally without needing internet connectivity.
                This data is pulled instantly since no network calls need to be made.
                Since we know we can store and retrieve this data instantly for offline usage why not allow your online users the same instant feedback?

                <br />
                <br />

                Today we will dig into the what, why and how to do exactly that.
              </p>

              <h2>
                What is the "Offline Mode First" methodology?
              </h2>

              <p>
                At its core, "Offline Mode First" revolves around improving perceived performance, even when users are online. By caching data for offline use, applications can load essential information immediately and then update it asynchronously in the background. This ensures that users in rural areas or with intermittent connectivity can access critical data without interruptions.
              </p>

              <h2>
                Why is "Offline Mode First" important?
              </h2>

              <p>
                The importance of "Offline Mode First" lies in ensuring that users can access vital information whenever and wherever they need it, regardless of internet connectivity. By prioritizing offline functionality, developers enhance user experiences and mitigate frustration caused by connectivity issues. It goes further to ensure users get instant information even while waiting for network requests to finish to provide the latest data.
              </p>

              <h2>
                How does "Offline Mode First" differ from traditional development approaches?
              </h2>

              <p>
              In traditional development approaches, applications typically rely on real-time data fetching, leading to latency issues when connectivity is poor. However, with "Offline Mode First," previously stored data is immediately available to users, eliminating load times for unchanged data and providing uninterrupted access to essential information.
              </p>

              <h2>
                What are the benefits of adopting the "Offline Mode First" approach?
              </h2>

              <p>
              One of the primary benefits of "Offline Mode First" is the ability to display cached data immediately, regardless of API response times. Once API data is collected, it can be readily accessed, enhancing user experiences and reducing reliance on real-time data fetching.
              </p>

              <h2>
                How can developers implement the "Offline Mode First" methodology in their projects?
              </h2>

              <p>In this example we are going to be building an Offline Mode First Flutter Application using Sembast to store the data and Nest.js as our API. We will walk through every step; from creating the app to having a fully functional UI loading data in an Offline Mode First approach. While this approach focuses on Flutter, Sembast and Nest.js, know that you can take these principles to any architecture.</p>

              <h2>
                Creating the Flutter App
              </h2>

              <p>
                We are going to use the Flutter CLI to create the App: <a href="https://docs.flutter.dev/reference/flutter-cli" target='_blank'>https://docs.flutter.dev/reference/flutter-cli</a>
              </p>

              <pre><code class="language-dart" innerHTML={this._html}></code></pre>
            </div>
          </div>

          <slot></slot>
        </section>
      </Host>
    );
  }

}
