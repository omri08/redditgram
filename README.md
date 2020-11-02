## RedditGram

RedditGram is a web app for viewing Reddit posts and comments in a way that similar to Instagram.

## Demo

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/54754198/97907744-65f2d600-1d4e-11eb-9b6e-6647473c5b6e.gif)

## FrontEnd

The frontEnd is built with React, Scss modules, Ant Design, Axios and fully responsive.
You can find the frontEnd code inside the `client` folder.

### FrontEnd structe:

`App.js` - responsible for mange the navigation.
`/pages` - responsible for displaying the components and manage the state.
`/components` - customizable as possible, getting part of the style and data thought props. Each prop has a prop type.
`/utils` - contains functions to get data from the server, and hooks.
`/assests` - contains the fonts, SVG, and scss variables.

## Lambda Functions

The BackEnd is very simple so I decided to go with AWS Lambda with Serverless framework.
In this project I have only 3 endpoints:
`/post/:id` - To get a specific post.
`/posts/:sub` - To get posts from a specific subreddit.
`/search/:sub` - To search a subreddit.

in `./src/handlers` you can see the code for this endpoints.
in `./src/lib/reddit` you can see the code for getting the data from reddit
