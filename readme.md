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

Tha above scripts are from [this starter kit]("https://github.com/maciejkorsan/wtf-webpack-starter").



## License

This project is licensed under the MIT License.

