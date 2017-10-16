# React Flicker Image Gallery

## Description
This project renders a photo gallery retrieving picture data from Flicker's public API.

The gallery allows the user to enter a search key word and will display 4 images. The image thumbnails can be selected or browsed with the navigation arrows.

This was built as an example app.

![oct-16-2017 03-49-34](https://user-images.githubusercontent.com/1060904/31600759-964e1c5c-b225-11e7-8bcf-c96e0f240ab9.gif)

## Requirements
node >= 8.1.4
npm >= 5.4.2

## How to run the project:
* `npm install`
* `npm run dev`
* Go to localhost:8080

## How to run tests:
* `npm t`
Tests cover the business logic of the app (reducer, api, actions, selectors, etc).

## Tech and Implementation Details
- Uses React v16 with latest rendering enginer optimizations, and array rendering.
- Uses Redux and Immutable for maintaining immutable data state.
- RXJS and redux-observable for ease of dispatching/chaining Redux actions.
- Uses SASS as the CSS preprocessor.
- Webpack for bundling and running the local server for development.
- Axios for fetching data.
- ES6+
- Mobile friendly

