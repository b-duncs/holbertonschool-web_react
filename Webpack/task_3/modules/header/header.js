//import jQuery, and add the logo and the H1 title to the header.js file (with content Holberton Dashboard).
// Add a console.log printing Init header.
import $ from "jquery";
import "./header.css";

console.log("Init header");

$("<div id='logo'></div>").appendTo(document.body);
$("<h1>Holberton Dashboard</h1>").appendTo(document.body);

