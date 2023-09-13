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
