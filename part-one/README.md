# Events Management Application
By now you should be familiar with basic sinatra apps and creating simple websites.  This problem will give you a chance to demonstrate your proficiency with the web by writing code for controllers, implementing user authentication, and AJAXing a form. We're going full [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) and building a simple event-management application.

The problem is broken into 2 parts.  You will need to complete each part to move on. We've given approximate timing for each part.  If you find you are taking a lot longer be sure to ask questions.

## Objectives

### Part 1: Events  (Timing ~ 60 min)

We have users and events.  Users can attend many events and an event can be attended by many users.  Events are user-created, too, so an event belongs to a user and a user can create multiple events.

With user authentication in place, create pages which let the user:

1. create new events
2. show their created events
3. edit events
4. destroy events

Be sure to follow the RESTful routing conventions when creating your routes.

### Part 2: AJAXify it (Timing ~ 30 min)

On the page that lists all the events created by the user, add the form for creating a new event.  Use AJAX on this form so that when a user adds a new event, that new event is appended to the list of created events without refreshing the page.
