# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Reacathon


This was the second project I built during the General Assembly Software Engineering Immersive Course (week 6). The project was built in collaboration with Jos Brogan https://github.com/JosBogan during a two day 'Reactathon' **public API**.

### <h1>Asteroid-Catasteroid</h1>

Users input a date into the app, and it gives them information on the top five Asteroids closest to Earth on that date. The app uses NASA's NeoWs (Near Earth Object Web Service) RESTful API, and their APOD API (Astrony Picture of the Day), for the home page background image. A full list of NASA API's can be found here: https://api.nasa.gov/

![home page](https://i.imgur.com/QVvvc4V.png)

**<h1>Built With</h1>**
* HTML5
* CSS
* Javascript
    * ECMAScript6
    * React.js
    * axios
* GitHub


**<h1> Deployment </h1>**
The asteroid app is deployed on Heroku and it can be found here: https://asteroid-catasteroid.herokuapp.com/

**<h1>Getting Started</h1>**
Use the clone button to download the app source code. In the terminal enter the following commands:

```
<!-- To install all the packages listed in the package.json: -->
$ npm i
<!-- Run the app in your localhost: -->
$ npm run serve
<!-- Check the console for any issues and if there are check the package.json for any dependancies missing
```  

**<h1>Website Architecture</h1>**
<h2>The Nasa API</h2>

We had a limited time to build the app, so we wanted to utilise an API that would give us lots of interesting data on asteroids. This gave us more choice on what we wanted to display to the user. Rather than have a static background for the homepage we chose to use their APOD API, which offers up a new astronomy picture every day.

<h2>Homepage</h2>
Our homepage has the changing APOD API background, and allows the user to input a date using the date form. Once they have selected a date they press submit, and are taken to the next page. 

<h2>Asteroid Display Page</h3>
Once you land on the asteroid display page, a function runs to get the data from the GitHub API and it populates six cards on the page with the asteroids that were closest to Earth on that day. The central card shows the closest asteroid.

The template of each card is stored in the AsteroidCard.js component and it uses the data passed down by the parent component.

![asteroid cards](https://i.imgur.com/p8DFXd7.png)

We mapped through the API request to get the top six asteroids that were closest to Earth on the date the user chose.

![mapping through asteroid cards](https://i.imgur.com/zk4z58E.png)

When the user clicks on any of the cards they are told how far away the asteroid was, but in comparison to a measurement they would understand. For example:

![showing distance facts](https://i.imgur.com/vcVCpzB.png)

We achieved this with a static component. It had a function that would generate random comparison's based on the distance of the asteroid, using a switch statement. 

![static component](https://i.imgur.com/XEuYQOF.png)

We imported it into our AsteroidCard.js, so that when the user clicked on the card the React notify plugin would show them a random form of measurement comparison.

<h1>Challenges and future improvements</h1>

Time constraints meant we were not able to achieve all the functionality we wanted. For example, using the data from the API to build a comparison generator for the size of the asteroid. We also realised that occasionally the APOD API would be a video, and therefore would not show up as a background image. 
Our background image would be empty, and therefore we altered the code so that we had a placeholder image if the API returned a video.

![image display](https://i.imgur.com/f1dtLmq.png)

We also wanted to create our own loading icon, using a custom designed logo but we ran out of time and used a general one avaliable to us. 


