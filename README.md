# Challenge Description
### You are asked to implement a Modal Form - residing inside a friendly iframe.
1. Implement 2 pages including the following items:
  * Basic navigation bar - with logo and random company name
   * Page title - dynamic based on current selected route
   * Navigation item - a way to transition between pages
2. First page should include a welcome message and an action button pointing to the second
page.
3. The second page should have a clickable button in the center with the text "Subscribe to our
channel".
  * The button should animate an iframe expanding from the center of the screen to match
half of the screen's height and width and be presented to the user as a modal.
   * The iframe modal should be centered regardless of the scrolling of the page.
   * The iframe modal should transition (animate) between open and closed state.
   * The iframe should include a basic html form, containing an input field(Dropdown) and a
submit button below it:
      - The input field is a Dropdown with a textfield inside of it.
      - The dropdown's width is the size of the modal minus some padding.
      - The dropdown in Resting state (not open or focused) should show all of the
SelectedOptions - present them as "UI Chips" (https://i.stack.imgur.com/HPeTv.png)
with a maximum height of 1 row (50px);
  * When clicked, the dropdown opens and expands its size to a maximum of 3 rows,
without affecting the submit button's position.
  * Typing into the input field should filter the options listed in the dropdown, and show
another option on the top to create the option - clicking on that, or on the Enter key will
create that option and add it into the list of options and into the list of SelectedOptions.
  * Selecting an option from the dropdown will add it to the SelectedOptions.
  * If The total number of chips in the row exceeds the size of the row, aggregate them
into a "(5 more)" chip instead.
  * On submitting the form, navigate the user back to the first page, and show a message
instead of the Welcome message, stating the user's selected "numbers" (SelectedOptions)
and a message saying "user subscribed"
  * on refresh the page should remember the subscription and reload the welcome page the
same way.
  * Bonus - style the application using material-ui / ant-design
  *  Bonus 2 - use styled-components or emotion as Css-In-Js solution
**You can use any tools or plugins you wish, as long as they dont implement the main functionality and are only "helpers" (e.g. lodash)**

Good luck!
