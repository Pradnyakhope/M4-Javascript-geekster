# DOM Manipulation Example

This is a simple example of DOM manipulation using HTML and JavaScript.

## Project Structure

├── index.html
├── index.js
└── README.md


## index.html

The `index.html` file contains a basic HTML structure with a `div` element that has an id of `mydiv`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom Manipulation Example</title>
</head>
<body>
    <div id="mydiv">
        Hello, I'm a Div!
    </div>
    
    <!-- Add script.js -->
    <script src="index.js"></script>
</body>
</html>
index.js
The index.js file contains JavaScript code that manipulates the div element with id mydiv. It changes the style of the div element by modifying its color, font size, background color, margin, padding, font weight, height, and width.

javascript
Copy code
// Get a reference to the div element using its Id
var divElement = document.getElementById("mydiv");

// Change the style of the div element
divElement.style.color = "blue";
divElement.style.fontSize = "18px";
divElement.style.backgroundColor = "yellow";
divElement.style.margin = "20px";
divElement.style.padding = "10px";
divElement.style.fontWeight = "bold";
divElement.style.height = "200px";
divElement.style.width = "300px";
How to Run
Clone the repository or download the project files.
Open the index.html file in your preferred web browser.
The div element with id mydiv will be styled as specified in the index.js file.

#Description
This example demonstrates how to use JavaScript to manipulate the DOM (Document Object Model) by changing the style of an HTML element. The div element with id mydiv is styled with various CSS properties such as color, font size, background color, margin, padding, font weight, height, and width.😀👍
