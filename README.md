Title: Front-End Capstone Project
=================================
A frontend capstone project at Hack Reactor

Overview:
---------
The Front-End Capstone Project is an e-commerce site built as a group during the Hack Reactor bootcamp. Each individual in the group was responsible for their own component, which allowed each person to strengthen their skills at React, JavaScript, and CSS. In the end, each component was brought together seamlessly through intense collaboration and teamwork.

Component Details:
-----------------
Main Product Overview 
-----------------
![GIF expired](http://g.recordit.co/6jwOknX8cf.gif)

The main product overview displays the details of the selected product including:
  * An interactive gallery of product images
  * An assortment of selectable styles for each product with their own set of images
  * Product description, prices, category, and rating
  * Select desired style, size, and quantity and add to cart based on product stock availability

Related Products and Your Outfit
-----------------
![GIF expired](http://g.recordit.co/us0TwF74QX.gif)

The Related Products displays product cards of items related to the current product that may be of interest to the user. This component includes:
  * Scrollable list of product cards
  * Conditionally rendered scroll arrows
  * A comparison table for each related product

Your Outfit allows for users to track and manage individual products that are of interest to them. This component includes:
  * Add Outfit card that allows user to add the current product to their Your Outfit list
  * A delete button on each outfit card that removes the product from the list

Questions and Answers
-----------------
![GIF expired](http://g.recordit.co/PdTAb9h84m.gif)

The Questions & Answers module allows for searching, viewing, asking, and answering questions for the current product. Some key components are:
  * Dynamic search bar that renders questions matching the search phrase
  * Q&As are sorted by helpfulness, which the users can interact with.
  * View more question/answer buttons that display more Q&As upon clicking
  * Add question/answer buttons that brings up a form modal for Q&A submission to the API.


Built With:
-------------
* [React](https://reactjs.org/)
* [Node](https://nodejs.dev/en/)
* [Express](https://expressjs.com/)
* [Babel](https://babeljs.io/), [Webpack](https://webpack.js.org/)
* [Jest](https://jestjs.io/)
* [Styled Components](https://styled-components.com/)
* [Axios](https://www.axios.com/)
* [Bluebird](http://bluebirdjs.com/docs/getting-started.html)
* [Cloudinary](https://cloudinary.com/)


Installation:
-------------
To get a local copy up and running follow these simple steps:

Pre-Installation Requirements:
```
Node v16.16.0
NPM 8.11.0
```
Instructions:
1. Clone the repo

`git clone https://github.com/FrontEndCapstoneSNO1/FEC.git`

2. Acquire a github personal access token to acquire access to the API. Insert token into example.env and rename file to .env
3. Install NPM packages

`npm install`

4 In one terminal compile Webpack

`npm run client-dev`

5. In a second terminal start the Server

`npm run server-dev`

6. Navigate to localhost:3000 in your browser

Team
-----
* Gracie Fogarty - Product Overview
  * https://github.com/GracieFogarty
  * https://www.linkedin.com/in/graciefogarty/

* Andy Ho - Related Products
  * https://github.com/andy-shho
  * https://www.linkedin.com/in/andy-ho-094457210/

* Daniel Au - Question & Answers
  * https://github.com/dxnau
  * https://www.linkedin.com/in/dxnielau

