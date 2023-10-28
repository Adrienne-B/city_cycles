# City Cycles
I created a personalize UX/UI template from a UX/UI course from skillcrush;  I wanted to challenge myself and create a website using react.js.

## Summary
Recreating a fictional website in hopes to gain more customers with a better experience when surfing through the website;

### Software used:
Visual Studio Code 
Bootstrap

### What I learn:
### Sources I used to help me on unexpected obstacles were: FreeCodeCamp, Youtubem Google, Dev Community, nextjs.org, Stack Overflow, and Hithub
Make sure that you have enough disk space. Depending on how much your website that you are creating in react.js, it can override the limits of your disk space. Clean your cookies, desktop, 
unnecessary downloads in your computer etc.

Make sure that you update your Node.js.

Make sure you put alt="" with information in the strings in regards to importing pictures for your website. It may not seem of important, but it can help a developer or user read the description of the picture or pictures that you have.

Sometimes you have to uninstall and then reinstall node_modules and package.json for your website to work again. Make sure you use cashe clean --force right after.

#### Challenges to improve on:
1. How to make animate.css for websites to work

#### Random Unexpected Challenges:
1. When I first started building up the website, it wouldn't show on the browser. 
2. Everything was squeezed together and would not spread out.
3. The button on the home page of the website would not direct itself to the reservation page that allows customers to select a bike.
4. The reservation style sheet didn't showcase the effect of the Reservation page.
5. Following a timeline in a YouTube video on how to do arrayList mapping <div>{image}</div> would not showcase my four bikes from the ReservationItem page. I tried <img src={require('/images/imageName.png')} /> in the ReservationList page and it still didn't work.

#### Solutions/solving the issue:
1. I had to cancel the Visual Studio Code and then reopen it to the website foldery. It finally showed but then there was another problem.
2. I realized I had margin: with a small number which was a typo. Once I deleted that it spread out perfectly.
3. I realized that I did not have the reservation file in the route/router (where I had my navigation elements in) and I didn't have it from the original final it was in.
4.  I had to input style in the html instead.
5. I had to put <div><img src={images} alt="whatever description for the picture" /></div>, which allowed all of my four bikes to showcase in the browser.

#### Weakness so far:
1.	ArrayList/Mapping

#### Installments:
1.	npm install react-router-dom
2.	npm run build
3.	npm install @mui/material @emotion/react @emotion/styled
4.	npm install @mui/icons-material
5.	npm install -g react-devtools

Credited: https://www.youtube.com/watch?v=TId6holGVeY











/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
