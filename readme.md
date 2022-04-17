# JavaScript DOM Scripting

1. Tour the Application - It's party time! You're planning a party, and you've sent invitations out. Now as the RSVP's come in, you need a way to keep track of who's coming. Let's look at the app we'll be building to manage that for us.
2. Registering Names - The first feature we'll work on is name registration. We'll harness the default browser behavior for forms to get two handlers for the price of one, using the submit event.
3. RSVP Checkbox - Let's allow users to mark off when guests respond that they intend to come to the party.
4. Removing Names - What if users make a mistake and want to remove a name? Let's add a button to each list item to delete it. We'll also move to a delegated click handler, to allow us to set one handler for all buttons.
5. Moving to an Editing State - we added an 'edit' button to our list items. Now we'll need to manipulate the DOM when the 'edit' buttons are clicked to get to an editing state.
6. Saving Names -  moving list items to a saved state when the save button was clicked. 
7. Filter Invitees Who Have Not Responded - add a new feature: filtering out guests who have yet to respond. This will enable our users to see the current guest list at a glance. Unlike the previous features we've implemented, we'll add this one to the page dynamically. In other words, we'll create and insert all the new elements we need to the DOM. Then we'll attach behavior to those elements, all with JavaScript.
8. The DOMContentLoaded Event - When a browser "reads" through an HTML page, any JavaScript it encounters is run as soon as the browser sees it. If JavaScript is written at the top of the document, it can fail if the browser hasn't seen the elements it refers to yet. We can use the DOMContentLoaded event to solve this issue.
9. Refactoring - Refactoring is a process that naturally follows the initial coding stage, where you go back through your program and make what you wrote more concise and readable.
10. Create List Items - There's a repeating pattern that we can write a function to perform, and reduce repetition in our code.
