<div id="top"></div>


<br />
<div align="center">
  <a href="https://github.com/egingir/GitHubIssueBrowser">
    # GitHubIssueBrowser by E. Gingir
  </a>

  <h3 align="center">GitHub Issue Browser</h3>

  <p align="center">
    This project was designed to demonstrate my skills on React Native.
    <br />
     <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/egingir/GitHubIssueBrowser/issues">Report Bug</a>
    ·
    <a href="https://github.com/egingir/GitHubIssueBrowser/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was designed to illustrate my skills on React Native.

Project simply requires organization and repository fields as inputs and allows users to browser issues with 'sort' and 'bookmark' abilities.

Project properties are as follows:

1. Tech stack,
   * React Native bare workflow
    * React Navigation
    * Redux
    * TypeScript

2. All components including Buttons, Inputs, Dropdowns, Cards and Texts were designed based on pure React Native functionalities. Design theme has been modeled from scratch.

3. Different design patterns has been followed troughout the project to illustrate the usage of each one.  
    * Logic, view and style have been seperated for Text, Button and Input components.
    * Logic and View have been seperated for Card components. Style has been embedded in View of the Card components.
    * All functionality and View options are kept in Screen components as a single file.
    * GitHub Issue and Repository information has been modeled.
    * Bookmarks have been stored using Redux and Redux Thunk to be able to apply middleware and addional store options.
    * Both package-lock and yarn.lock files were kept not to yield dependency troubles for different users.

4. React navigation usage was illustrated with 2 pages.

5. GitHub default colors and fonts have been used to kept styling consistent.


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

You need to have Node to use this repository.

### Installation

1. Clone the repository

```sh
   git clone https://github.com/egingir/gitgubissuebrowser.git
   ```
3. Install NPM packages

  To use npm to install dependencies.
```sh
   npm install
   ```
   To use yarn to install dependencies.
```sh
   yarn install
   ```
4. Run metro server with the following command and keep it running.

  ```sh
   npx react-native start
   ```
5. Open a new terminal. 

* If you have a Windows pc apply the steps in https://developer.android.com/studio/run/emulator and then run the following code to run the code on android simulator. You can not run the code on an IOS simulator with Windows pc.

```sh
   npx react-native run-android
   ```

* If you have a MAC computer you can run both android and IOS simulators. Apply the above step to run android simulator. You need to install XCode to and follow the steps here. https://developer.apple.com/documentation/xcode/running-your-app-in-the-simulator-or-on-a-device. Then you can use the following command to run the app on an IOS simulator.

```sh
   npx react-native run-ios
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

E. Gingir - emrahgingir@gmail.com

Project Link: [https://github.com/egingir/GitHubIssueBrowser](https://github.com/egingir/GitHubIssueBrowser)

<p align="right">(<a href="#top">back to top</a>)</p>
