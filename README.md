# Learn Meteor Blaze
This is a simple tutorial, we want to learn some key concepts and learn via coding.
We use different packages and concepts.


Simply go to first commit and follow along commit by commit.

## 0. Meteor Blaze
You see the initial meteor framework structure.
- *client/main.js* & *server/main.js* : in package.json, we define these as entry points to build together everything.
- *main.scss*: fourseven:scss@4.15.0 is our meteor package, that enables scss. Meteor finds (s)css files in client/
- *packages/* folder: here we store local packages downloaded and edited, add them with "meteor add fourseven:scss@4.15.0"
- *tests/* folder: Meteor ignores this folder and any file with the name *.test.js or *.spec.js .

Let's have a look into client/main.js
- the HTML Template is imported here (line 5).
- You see Template.hello. If you open main.html, you see `<template name="hello">` and `{{> hello}}` in `<body`>.
  - `{{> hello}}` is a Template Tag, which includes the sub template "hello" inside the html.
  - `<body></body>` in main.html is the area, where all html code gets combined to the body of the `<html>`.
  - A template is surrounded by `<template name="main></template>` and in .js you make the code dynamic.
- Template.hello.onCreated(function () {...}):
  - everything inside the ... will be run on THE FIRST TIME before the html gets rendered.
- Template.hello.onRendered(function () {...}):
  - everything inside the ... has been run, the app now waits for user interaction.
- Template.hello.helpers({...})
  - here you add functions (as js object.methods) like counter() {}, you could also write counter: function() {}
  - we will later look at helpers for Reactivity
  - for now remember: 
    - you can call helpers functions inside .html `<template>...</template>`.
    - everything you return from the function will be shown in the template.
    - if you return a Promise, this will work in future.
  


Next lesson will be about routes, we already added routes.js.

## 1. Routing
- Look at routes.js: 
  - You see the path '/', this is localhost:3000/
  - You see "main", which is the higher order template, in which "homepage" is opened
- Look at main.html
  - You see the higher order template included in `<body>{{> main}}</main>`
  - in template "main" you see `{{> Template.dynamic template=area}}`
  - you remember area as the property in routes.js pointing to 'homepage'

In the next commit, we add a new route.

## 2. TemplateController (1)
- Look at routes.js:
  - You see /login with the area: login, so wee will log into login.html
- Look at login.html
  - You see some nice easy readable html, this is plain html we will later add template tags to.
  - Every template has a js logic in the corresponding .js file, so look into login.js
- Look at login.js
  - Now, this is different, instead of Template.hello, we use TemplateController.
  - TemplateController is some nice grouping of the template logic with other features, we will come to.
  - look at events:
    - Here, you add eventHandlers like click, change, input, etc. have a look at meteor.com to find out all of them
    - You write "click .jquerySyntax"(event, template): So use . for classes, # for ids... You find the corresponding elements in login.html
    - We used event.preventDefault() here, to stop default of the browser, this is maybe only needed for links `<a href=""></a>` and forms.
    - You can click on the button and look into the console: The Template has other nice properties we will come to.
  
For now, it's enough, we will have a look at the Life Cycle the next time.

## 3. The Live-Cycle & Tracker.autorun
- Look at login.js:
  - Remember, onCreated is called on the first run before the html gets rendered.
  - Tracker.autorun and this.autorun is nearly the same, only that this.autorun is bound to this template.
  - When onCreated is called, the function in this.autorun gets registered.
    - this.state.counter is a reactive var, we created in state:{} (line 4)
    - Every reactive var in an autorun function makes the function rerun, when it changes.
    - Database Queries in Meteor and new ReactiveVar() are also reactive vars. Helpers work similarly.
  - So after onCreated is called, the html with all helpers gets rendered and onRendered gets called.
    - If there is a `{{> subTemplate}}` inside the html, it gets rendered with a new Lifecycle.
  - Now things can happen on the page, here clicking button will call the eventHandler `'click .js-loginButton'`
    - You see, inside is this.state.counter += 1, when clicked.
    - Now this.state.counter changes and the autorun in onCreated gets re-rendered
    - A console.log will be printed.
  - Look at main.js
    - in the eventHandler `'click button'` is a ReactiveVar and we do the same here with += 1
    - in the Template.hello.helper is a hidden autorun function, counter is fetched and the template gets re-rendered.
  - When you leave the page, onDestroyed gets called.