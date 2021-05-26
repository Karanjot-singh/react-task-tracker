## React Introduction
https://youtu.be/w7ejDZ8SWv8

React - frmaewrk for UI
Usualy PHP is run on the server with HTML templates on the top

Node.js - runtime framework
Express.js Backend Framework
MongoDB - Databases

For any Backend, server serves JSON data from the server

React SPA- single page app for rerouting performed by react which comiles to a JS bundle loaded by the browser
- Used Along with MERN to connect with backend
- Alternative to Angular or Vue

Benefits of React
    To structure of the View
    MVC - model deals with data, controller deals with thte routing View is the UI (React)
    Virtual DOM (Ddcument Object Model ) - reload without refresh

- Cmponents render/ return JSX. They have state that controlls how the component behaves (For expand contract lists)
- The state also includes the data passed on to the component, In order to share the state with other components,
- App / Global state available to entire UI

React Hooks are funcitons that let us hook into the React state and lifecycle features from function components
useState
use Effect

## File Strucuture

index.html - the SPA 
<div id="root"> is the gateway to the UI of our react application

index.js is usually the entry point of our app importing react & react DOM

For styling use, css files, Styled components in react or use direct CSS in JSX
