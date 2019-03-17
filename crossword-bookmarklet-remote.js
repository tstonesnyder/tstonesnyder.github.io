var htmlBeg = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.warning {color: red;}
.bg-clues {page-break-before: always;}
.clues-across {column-count: 3;}
.clues-down {column-count: 3;}
h3 {column-span: all; margin-bottom: 0; text-transform: uppercase;}
ol {list-style-type: none; padding-inline-start: 0; margin: 0;}
.bg-crossword {font-family: Arial, Helvetica, sans-serif; font-size: 10pt;}
.bg-crossword table {border: 1px solid #999;}
.bg-crossword td {border: 1px solid #999; vertical-align: top;}
.bg-crossword td.deadCell {background-color: #505352; border-color: #505352; margin: 0; font-size: xx-large; font-weight: bold; text-align: center; vertical-align: middle; }
.bg-crossword td.deadCell:before {content: "||||";}
.bg-crossword input {border: none;}
@media print {@page {margin: 0.4in;} .warning{display: none;}}
</style>
</head>
<body>
<h1 class='warning'>WARNING: Do NOT print this page in duplex, or the clues will be printed on the BACK of the puzzle.</h1>`;  
var htmlEnd = `</body></html>`;
var puzzleHtmlBeg = `<div id="main" role="main"><div class="mod bg-crossword"><div class="col bg-col-ab" id="puzzle-wrapper">`;
var puzzleHtmlEnd = `</div></div></div>`;
if (!confirm('Reformat Boston Globe crossword puzzle for printing?')) {return;}
var puzzleElem = document.getElementById("puzzle");
var cluesElem = document.getElementById("puzzle-clues");
if (!puzzleElem || !cluesElem) {
  alert('Puzzle and/or clues not found on current page! You must be on the page displaying the crossword puzzle.');
} else {
  var htmlComplete = htmlBeg + puzzleHtmlBeg + puzzleElem.outerHTML + puzzleHtmlEnd + cluesElem.outerHTML + htmlEnd;
  var newWindow = window.open("", "PrintPuzzle");
  newWindow.document.write(htmlComplete);
}