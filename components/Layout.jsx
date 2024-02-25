// components/Layout.jsx
const React = require('react');
const NavBar=require("./NavBar")
module.exports = function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel='stylesheet' href='/styles/index.css' />
        <link type="text/css" rel="stylesheet" href="public/styles/materialize.min.css"  media="screen,projection"/>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        />
        <script defer type="text/javascript" src="public/scripts/materialize.min.js"></script>
        <script defer src='/scripts/category.js' />
        
      </head>
      <body>
      <NavBar/>
        {children}</body>
    </html>
  );
};
