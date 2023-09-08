// import jquery and add the below elements in the following order
import $ from "jquery";
const _ = require('lodash');

$("<p>Holberton Dashboard</p>").appendTo(document.body);
$("<p>Dashboard data for the students</p>").appendTo(document.body);
$("<button>Click here to get started</button>").appendTo(document.body);
$("<p id='count'></p>").appendTo(document.body);
$("<p>Copyright - Holberton School</p>").appendTo(document.body);

function updateCounter(){
  let counter = 0;
  const debouncedCounter = _.debounce(() => {
    counter++;
    $("#count").text(`${counter} clicks on the button`);
  });
  $('button').on('click', debouncedCounter(updateCounter, 500));
}

