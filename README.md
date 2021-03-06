# Tap Room

#### React.js application, 09/11/2020

#### By _**Evgeniya Chernaya**_

## Description

Tap room is a React application where a bar store (user) can track their drink kegs.

## Setup/Installation Requirements

* Clone the repository to your desired directory (git clone https://github.com/janecher/tap-room.git)
* Do "npm install", then "npm run build" in the terminal
* Do "npm run start" in the terminal to see the result in browser

## Specification

<img src="README-images/component-tree.png"/><br>

- User can see a list of all available products (DrinkDetail component). For each product user can see name, brand, flavor, price.
- User can submit a form to add a new product to a list (Click Add Drink button, fill the form om NewDrinkForm component).
- User is able to click on a product to see its detail page.
- User can see how many pints are left in a keg (full keg has 124 pints).
- User is able to click a button "Sell" on product detail page (to decrease the number of pints left by 1). Pints should not be able to go below 0.
- Message "Almost Empty" appears on product detail page if keg has less than 10 pints, and "Out of Stock" once it's empty.
- User is able to click a button "Restock" on product detail page (to increase the number of pints to the full keg = 124 pints).
- User can edit a products's properties (EditDrinkForm component).
- User is able to delete a produst.

## Known Bugs

_No known bags_

## Support and contact details

Contact me at _evgenya.chernaya@gmail.com_

## Technologies Used

  * React
  * JavaScript
  * JSX
  * HTML
  * CSS
  * Bootstrap

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**