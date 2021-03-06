# Premier League application

Simple application which shows basic information about Premier League clubs like stadion, date of creation, current players, etc.

## Motivation

I like watching football a lot. My most favorite football league is Premier League, so I have searched API which can give me necessary data, and I have started to create the application. I am very interesting of the results of my work ;).

## What I use?

The API which I use is a free, and [here it is](https://www.football-data.org/). In additional I  use [webpack starter kit](https://github.com/maciejkorsan/wtf-webpack-starter) created by [Maciej Korsan](https://www.facebook.com/korsanpl/).

## Demo

Click [here](https://mb-dir.github.io/Premier-League-application/) to see the live demo.

## How to use it?

The following instructions will allow you to work with the copy of the project.

### Prerequisites
- node
- npm
- git
- authorization token(API token) from [here](https://www.football-data.org/)

### Installing
- Open your termilan in folder where you want to copy the project
- Type `node -v` `npm -v` `git version` to check if you have it installed
- Paste: `git clone https://github.com/mb-dir/Premier-League-application.git .`

### Configuration

To the application works correctly you have to create a file called "config.js" in `src/js` and in this file create a variable called `API_TOKEN` with the api token from [here](https://www.football-data.org/), what is more you must export this variable. So the file structure should look like below

![example files structure](https://raw.githubusercontent.com/mb-dir/Premier-League-application/master/src/assets/img/example_file_structure/files_structure.PNG)

![example file content](https://raw.githubusercontent.com/mb-dir/Premier-League-application/master/src/assets/img/example_file_structure/token.PNG)

Such a file structure should provide that the application will work without any problems.

### Scripts

- dev server

        npm start
- runs production mode

        npm run build
- publish the page using gh-pages branch

        npm run publish

The above scripts are from [this starter kit](https://github.com/maciejkorsan/wtf-webpack-starter).

## My comments

- The API has delivered clubs crests in .png but for some time delivers in .svg format, so there is the white background. It does not look pretty, but still works.

- The history of this project is not perfect. I could add more tags to the history was clearer, pushing changes like update readme directly to master branch was not the best idea, what is more sometimes I could write more accurate commits message.

- For me the structure of this project is fine. I mean it is not too complicated and not too divided.

- `drawClubInfoContent` method in `ClubsInfo.js` is large, but synchronising data with view with the use DOM is not so easy, and I have not wanted to use template literals too much.

## License

This project is licensed under the MIT License.

