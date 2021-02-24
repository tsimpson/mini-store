# Phase 1 - Setup

- [x] As a Developer, I should be able to run the app with yarn start or npm start
  - We just want to get the base app working. There doesn't have to be anything special about it.

- [x] As a Developer, I should have access to a css style sheet in my application
  -  For this task, you can load in any stylesheet you'd like, or make your own if you are into that. We don't want to opt for something like Material UI in this case, because we want practice creating our own components from a stylesheet.

- [x] As a User, I should see links for "Home", "Deals", and "Cart" in the navbar, along with a Company Logo

- [x] As a User, navigating to "/", "/deals" and "/cart" via the menu should switch the contents of the page. Navigating should not reload the page.
  - Use a router such as React Router to implement page navigation. Each link "/", "/deals", and "/cart" should render a new page in the body of the application. The page doesn't have to have anything fancy on it at this point, it can just be text, but it should be different on each page.

- [x] As a User, the nav item for the page I am on should appear "active"
  - When a user clicks on a navlink to navigate to a different page, that navlink should appear "active" by applying some styling to it that distinguishes it from the other navlinks


# Phase 2 - Display Items
- [ ] As a User, I should see a list of items on the "home" page. This should look similar to what is in the prototype.
  - [ ] Load data from the "/item/list" route.
  - [ ] Create a component to display the item data. This should include PropTypes for prop type checking. It should look something like the cards on the home page of the prototype
  - [ ] Create a container component to display a list of item components. This component should be used contain and render the Item cards
  - [ ] Create a component that renders the rating stars and count.
    - [ ] Full Star SVG
    - [ ] Half Star SVG
    - [ ] Empty Star SVG

## Extras
- [ ] Make cards in the same row always be equal height
- [ ] Align "Add to Cart" Button to the bottom of the card, so all "add to cart" buttons in the row will align.
- [ ] Make the card list responsive for smaller screens. Reduce the number of cards displayed per row from three to two or one depending on the small screen size.




  



