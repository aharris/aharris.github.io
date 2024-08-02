import { Component, Host, h } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-dart.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';

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

    this._codeExamples[8] = Prism.highlight(`
$ flutter pub add sembast path_provider path get_it
        `, Prism.languages.bash, 'bash');

    this._codeExamples[9] = Prism.highlight(`
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';
import 'package:sembast/sembast.dart';
import 'package:sembast/sembast_io.dart';

class SembastService {
  late Database db;
  late StoreRef store = StoreRef.main();

  // init method
  Future<Database> init() async {
    var dir = await getApplicationDocumentsDirectory();

    // make sure it exists
    await dir.create(recursive: true);

    // build the database path
    var dbPath = join(dir.path, 'my_database.db');

    // open the database
    db = await databaseFactoryIo.openDatabase(dbPath);

    return db;
  }
}
    `, Prism.languages.dart, 'dart');

    this._codeExamples[10] = Prism.highlight(`
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  Services().init();

  await getIt<SembastService>().init();

  runApp(const MyApp());
}
    `, Prism.languages.dart, 'dart');

    this._codeExamples[11] = Prism.highlight(`
  Future<String> getHello() async {
    final response = await dio.get('http://localhost:3000');

    await getIt<SembastService>().store.record('hello').put(getIt<SembastService>().db, response.data);

    return response.data;
  }
    `, Prism.languages.dart, 'dart');

    this._codeExamples[12] = Prism.highlight(`
{"version":1,"sembast":1}
{"key":"hello","value":"Hello Enos!"}
    `, Prism.languages.json, 'json');

    this._codeExamples[13] = Prism.highlight(`
print('db: \${db.path}');
    `, Prism.languages.dart, 'dart');

    this._codeExamples[14] = Prism.highlight(`
Stream<String> getHello() async* {
  final storedData = await getIt<SembastService>().store.record('hello').get(getIt<SembastService>().db) as String;

  yield storedData;

  final response = await dio.get('http://localhost:3000');

  await getIt<SembastService>().store.record('hello').put(getIt<SembastService>().db, response.data);

  yield response.data;
}
    `, Prism.languages.dart, 'dart');

    this._codeExamples[15] = Prism.highlight(`
      class _MyHomePageState extends State<MyHomePage> {
        late String _hello = '';
        late bool _done = false;
      ...
    `, Prism.languages.dart, 'dart');

    this._codeExamples[16] = Prism.highlight(`
WidgetsBinding.instance.addPostFrameCallback((_) async {
  await getIt<SembastService>().init();

  getIt<ApiService>().getHello().listen((res) {
    setState(() {
      _hello = res;
    });
  });
});
    `, Prism.languages.dart, 'dart');

    this._codeExamples[17] = Prism.highlight(`
getIt<ApiService>().getHello().listen((res) {
  setState(() {
    _hello = res;
  });
}).onDone(() {
  setState(() {
    _done = true;
  });
});
    `, Prism.languages.dart, 'dart');

    this._codeExamples[18] = Prism.highlight(`
body: Stack(
  children: [
    Center(
        child: _hello.isNotEmpty
            ? Text(
                _hello,
                style: Theme.of(context).textTheme.bodyMedium,
              )
            : const CircularProgressIndicator()),
    Visibility(
      visible: !_done,
      child: const Positioned(
        bottom: 0,
        left: 0,
        right: 0,
        child: Dialog(
          backgroundColor: Color.fromRGBO(0, 0, 0, .1),
          child: Center(
              child: Padding(
            padding: EdgeInsets.all(8.0),
            child: Text('Loading...'),
          )),
        ),
      ),
    )
  ],
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

                <br />
                <br />

                Inside your app directory run the following commands to create and run the API:
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[2]}></code></pre>

              <p>
                Navigate to <code>localhost:3000</code> and you will see "Hello World".
                <br />
                <br />
                Awesome!
                <br />
                <br />
                Now we are going to make a few updates to this API to ensure we can see when changes are happening.
                <br />
                <br />
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
                <br />
                <br />
                To Make the APi calls we are going to use Dio (<a href="https://pub.dev/packages/dio" target='_blank'>https://pub.dev/packages/dio</a>)
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[5]}></code></pre>

              <p>
                Then we are going to make create a new directory called services and put a new file in it calls api_service.dart.
                <br />
                <br />
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
                <img src="/assets/images/blog_posts/offline_mode_first/example_1.png" alt="example 1: iPhone with Hello and a generated name" />
              </div>

              <h2>
                Storing the API data in Sembast
              </h2>

              <p>
                Now comes the fun part. Here we will begin storing the data we have just received for better online perceived performance and for use without any network connection at all, AKA offline.
                <br/>
                <br/>
                Install the dependencies:
              </p>

              <ul>
                <li>
                  <a href="https://pub.dev/packages/sembast" target="_blank">https://pub.dev/packages/sembast</a>
                </li>
                <li>
                  <a href="https://pub.dev/packages/path_provider" target="_blank">https://pub.dev/packages/path_provider</a>
                </li>
                <li>
                  <a href="https://pub.dev/packages/path" target="_blank">https://pub.dev/packages/path</a>
                </li>
              </ul>

              <pre><code class="language-bash" innerHTML={this._codeExamples[8]}></code></pre>

              <p>
                Then in order to store this data we will do the following:
                <br/>
                <br/>
                Create a new file in services directory called `sembast_service.dart`.
                <br/>
                <br/>
                Here we are going to initialize the DB:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[9]}></code></pre>

              <p>
                Once that is created we can call this init method in <code>main.dart</code> to get it started.
                <br/>
                <br/>
                Replace the <code>main()</code> method with the following.
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[10]}></code></pre>

              <p>
                Finally we will go back to our <code>api_service.dart</code> to update our <code>getHello</code> Method:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[11]}></code></pre>

              <p>
                We have added a call to store the response.data on the users device with Sembast.
                <br/>
                <br/>
                If you now open the db file that was created you should see this:
              </p>

              <pre><code class="language-bash" innerHTML={this._codeExamples[12]}></code></pre>

              <p>
                You can find this by logging out <code>db.path</code>.
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[13]}></code></pre>

              <h2>
                Calling the Sembast data.
              </h2>

              <p>
                Now that we have the data stored on the device we can retrieve that for offline usage. We can also retrieve it even when online so that the stored data appears immediately while waiting for the API call to finish!
                <br/>
                <br/>
                To do this we will:
                <br/>
                <br/>
                Convert the <code>getHello</code> method to a stream. Then, instead of returning the api call, we will <code>yield</code> the stored data first and then yield the actual response once it comes in.
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[14]}></code></pre>

              <p>
                Next, let's create a couple new variables to store the state of the api call:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[15]}></code></pre>

              <p>
                Now we need to listen for this changes in <code>main.dart</code> to update <code>_hello</code> when it changes:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[16]}></code></pre>

              <p>
                You will notice now the loader no longer appears and instead when you refresh the app you are immediately met with the stored data and after 3 seconds it automatically updates to the correct data. The loader will now only show if it is the first time the user is pulling this data and nothing has been stored yet.
                <br/>
                <br/>
                This is exactly what we want. However, it is probably a good idea to let your users know that something is happening behind the scenes.
                <br/>
                <br/>
                One way to do this is with the <code>onDone</code> method available when listening to a stream.
                <br/>
                <br/>
                Then we can update our listener to update this value <code>onDone</code>:
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[17]}></code></pre>

              <p>
                Finally, we can use this value to show and hide a message we put at the bottom of the screen notifying the user that the data is "Loading...":
                <br/>
                <br/>
                <code>main.dart</code>
              </p>

              <pre><code class="language-dart" innerHTML={this._codeExamples[18]}></code></pre>

              <p>
                You will notice that we have now wrapped our body content in a Stack in order to position our message at the bottom of the screen with `Positioned`. We have also added the Visibility widget to only show this loading message when _done  is false.
                <br/>
                <br/>
                You should now have a view that looks like this while loading:
              </p>

              <div class="image-wrapper">
                <img src="/assets/images/blog_posts/offline_mode_first/example_2.png" alt="example 2: iPhone with loading indicator" />
              </div>

              <p>And like this after 3 seconds:</p>

              <div class="image-wrapper">
                <img src="/assets/images/blog_posts/offline_mode_first/example_3.png" alt="example 3: iPhone with Hello and a generated name" />
              </div>

              <h2>
                Conclusion
              </h2>

              <p>
                And there you have it! You now have an application that not only works offline but also delivers the instant gratification and perceived performance that comes with zero lag times. Data is loaded immediately regardless of network connectivity and if the user is online they can get real time updates.
                <br/>
                <br/>
                That is the beauty and benefit of Offline Mode First!
                <br/>
                <br/>
                Get The full working demo here: <a href="https://github.com/aharris/offline_mode_first_app">https://github.com/aharris/offline_mode_first_app</a>
              </p>
            </div>
          </div>

          <slot></slot>
        </section>
      </Host>
    );
  }

}
