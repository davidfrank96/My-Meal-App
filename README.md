# My-Meal-App

This app will be able to book meals and add meals for users

[![Build Status](https://travis-ci.org/davidfrank96/My-Meal-App.svg?branch=develop)](https://travis-ci.org/davidfrank96/My-Meal-App)

[![Maintainability](https://api.codeclimate.com/v1/badges/e0ebb43c55f51089c234/maintainability)](https://codeclimate.com/github/davidfrank96/My-Meal-App/maintainability)


[![Coverage Status](https://coveralls.io/repos/github/davidfrank96/My-Meal-App/badge.svg?branch=develop)](https://coveralls.io/github/davidfrank96/My-Meal-App?branch=develop)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e0ebb43c55f51089c234/test_coverage)](https://codeclimate.com/github/davidfrank96/My-Meal-App/test_coverage)

## Getting Started
Clone the Repo.
-------------
`git clone https://github.com/davidfrank96/My-Meal-App`
## Prerequisites
The following tools will be needed to run this application 

successfully:
* Node v10.15.0 or above
* Npm v6.4 or above
## Endpoints
- GET **api/v1/meals/** Caterers can get all meals options they 

uploaded
- POST **api/v1/meals/** Catereres can add meal options linked to 

their account
- PUT **api/vi/meals/:mealId** Caterers can update their meal 

options
- DELETE **api/v1/meals/:mealId** Caterers can delete their meal 

options
- GET **api/v1/menu/** Caterers and Users can Get the menu for the 

day 
- POST **api/v1/menu** Caterers can Set a menu for the day 
- GET **api/v1/orders** Get All Orders
- POST **api/v1/orders** Users can make orders
- PUT **api/v1/orders/:orderId** Users can modify their orders
## Installation
**On your Local Machine**
- Pull the [develop](https://github.com/davidfrank96/My-Meal-App) 

branch off this repository
- Run `npm install` to install all dependencies
- Run npm start to start the app
- Access endpoints on **localhost:8000**
## Running the tests
Run `npm test` in the terminal for the cloned folder.
## Built With
* [Node.js](http://www.nodejs.org/) - Runtime-Enviroment
## Authors
* **Frank David Frank**