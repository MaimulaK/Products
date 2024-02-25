// components/Layout.jsx
const React = require('react');
const NavBar=require("./NavBar")
module.exports = function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/index.css' />
        {/* <script src='/js/script.js' /> */}
        <script defer src='/scripts/category.js' />
        
      </head>
      <body>
      <NavBar/>
        {children}</body>
    </html>
  );
};
