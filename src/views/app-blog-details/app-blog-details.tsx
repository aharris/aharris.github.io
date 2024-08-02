import { Component, Host, h } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-dart.js';
import 'prismjs/components/prism-bash.js';

@Component({
  tag: 'app-blog-details',
  styleUrl: 'app-blog-details.scss',
  shadow: false,
})
export class AppBlogDetails {
  private _codeExamples: string[] = [];

  componentWillRender() {
    this._codeExamples[0] = Prism.highlight(`
$ flutter create offline_mode_first_app
      `, Prism.languages.bash, 'bash');

    this._codeExamples[1] = Prism.highlight(`
$ cd offline_mode_first_app
$ flutter run
      `, Prism.languages.bash, 'bash');

    this._codeExamples[2] = Prism.highlight(`
$ nest new api
$ cd api
$ npm run start:dev
      `, Prism.languages.bash, 'bash');

      this._codeExamples[3] = Prism.highlight(`
$ npm install --save @faker-js/faker
      `, Prism.languages.bash, 'bash');

      this._codeExamples[4] = Prism.highlight(`
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(\`Hello \${faker.person.firstName()}\`);
      }, 3000);
    });
  }
}
      `, Prism.languages.dart, 'dart');

      this._codeExamples[5] = Prism.highlight(`
$ flutter pub add dio
      `, Prism.languages.bash, 'bash');

      this._codeExamples[6] = Prism.highlight(`
import 'package:dio/dio.dart';

class ApiService {
  final dio = Dio();

  Future<String> getHello() async {
    final response = await dio.get('http://localhost:3000');

    return response.data;
  }
}
        `, Prism.languages.dart, 'dart');

        this._codeExamples[7] = Prism.highlight(`
body: Center(
  // Center is a layout widget. It takes a single child and positions it
  // in the middle of the parent.
  child: FutureBuilder<String>(
    future: ApiService().getHello(),
    builder: (context, snapshot) {
      if (snapshot.connectionState == ConnectionState.done) {
        return Text(
          snapshot.data!,
          style: Theme.of(context).textTheme.bodyMedium,
        );
      } else {
        return const CircularProgressIndicator();
      }
    },
  ),
),
        `, Prism.languages.dart, 'dart');
  }

  componentDidRender() {
    Prism.highlightAll();
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

              <pre><code class="language-bash" innerHTML={this._codeExamples[0]}></code></pre>

              <p>
                Now we can start the App:
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[1]}></code></pre>

              <h2>
                Creating the API
              </h2>

              <p>
                Install the nest CLI tools: <a href="https://docs.nestjs.com/cli/overview" target='_blank'>https://docs.nestjs.com/cli/overview</a>

                <br/>
                <br/>

                Inside your app directory run the following commands to create and run the API:
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[2]}></code></pre>

              <p>
                Navigate to <code>localhost:3000</code> and you will see "Hello World".
                <br/>
                <br/>
                Awesome!
                <br/>
                <br/>
                Now we are going to make a few updates to this API to ensure we can see when changes are happening.
                <br/>
                <br/>
                First let's install a dependency to allow us to generate fake data on the fly, faker.js.
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[3]}></code></pre>

              <p>
                Then, open app.service.ts and update to match the following:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[4]}></code></pre>

              <p>
                This sets a 3 second delay on the API request to mimic real world situations. It also replaces "World" with a random first name so we can see when new data loads.

                Go ahead and refresh <code>localhost:3000</code> and after 3 seconds each time you should see a new name.
              </p>

              <h2>
                Making the API Call
              </h2>

              <p>
                Now that our API is set up it is time to go back to our flutter app and use it!
                <br/>
                <br/>
                To Make the APi calls we are going to use Dio (https://pub.dev/packages/dio)
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[5]}></code></pre>

              <p>
                Then we are going to make create a new directory called services and put a new file in it calls api_service.dart.
                <br/>
                <br/>
                In this new file add the following:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[6]}></code></pre>

              <p>
                Then in main.dart we are going to find the body Widget and replace it with the following:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[7]}></code></pre>

              <p>
                Now, every time we refresh our app we will get a loading indicator for 3 seconds until our API call finishes. Then we will see our expected data from our API:
              </p>

              <div class="image-wrapper">
                <img src="/assets/images/blog_posts/offline_mode_first/example_1.png" alt="iPhone with Hello and a generated name" />
              </div>
            </div>
          </div>

          <slot></slot>
        </section>
      </Host>
    );
  }

}
