# Project Franklin Demo

This is an Application demo using TypeScript, React with Redux (with Thunk and Devtools), NextJS, and Sass - with the occassional styled component.

I have decided to use `@reduxjs/toolkit` to abstract away a lot of the boilerplate that comes standard with Redux.

## Clone Repo

#### Follow these steps to clone the repository
``` bash
git clone https://github.com/moshejs/walmart-demo.git
```

Make sure to run `npm i` before running any of the scripts below!!

## Available Scripts

`npm run dev`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any errors in the console.

`npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes - ready for deployment.

`npm run serve`

Serves the app from the `build` command

`npm run deploy`

Deploys the application to GitHub Pages.

## Retrospective

Some ways to improve this application + process:

1. Routing - because I was only given one page, I dediced to do away with using a router, and as a result the navigation links are static and don't work.

2. Use Sass %100

3. Separate the cart and page-metadata from the product items. In a real world application, we follow REST practices or use GraphQL. This made the redux store a little awkward to work with.

4. Provide inspection link for InVision - I was able to eyeball most of the CSS. Having it would have improved my efficiency

5. Add unit tests
