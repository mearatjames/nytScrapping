# NYT Scraping

A simple web app dispalying latest technology news section scraped from NYT website

Visit the deployed version [here](https://still-castle-19414.herokuapp.com/)

## Built With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [Express-React-View](https://github.com/reactjs/express-react-views) - Express view engine which renders React components on server
* [Express](https://expressjs.com/) - Backend web framework for Node.js
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
* [Cheerio](https://github.com/cheeriojs/cheerio) - Implementation of core jQuery designed specifically for the server to parse, traverse/manipulate the result data structure

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm i
```

This should install node modules

After installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. 

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.


## How it works

- To scrape the latest news, simply click on `Scrape New Articles`
- Top 10 latest articles will be displayed
- Users can also save the articles by clicking on `Save` button
- Under `Saved Articles`, users can view all the saved articles and add or remove notes from the article
- Clicking on `Clear All Articles` will delete all articles and notes from the database





