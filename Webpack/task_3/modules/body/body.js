//import jQuery, Lodash and add the body code (button, counter) in the body.js file.
import $ from "jquery";
const _ = require('lodash');
import "./body.css";

$("<button>Click here to get started</button>").appendTo(document.body);
$("<p id='count'></p>").appendTo(document.body);

function updateCounter(){
  let counter = 0;
  const debouncedCounter = _.debounce(() => {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
  });
  $('button').on('click', debouncedCounter(updateCounter, 500));
}
