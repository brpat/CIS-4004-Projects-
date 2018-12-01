//start mouse listener as soon as page is loaded 
window.onload=alternate;

// mouse listener for table cells.
function alternate()
{	
	// We don't want table headers to light up. Only regular rows.
	$("tr td").not(':first-of-type').hover
	(	
		// Table rows are now bound by the hover selector to the mouse
		function()
		{	
			// if mouse hovers over row change background and text color
			$(this).css({"background-color":"yellow","color":"red"});
		},
		function()
		{
			// if no mouse hover then leave original css 
			$(this).css({"background-color":"","color":""});
		}
	);
	charCount();
}
// print the date and time in eastern format 
function dateTimePrint()
{
	document.write("Today is " + Date())
}
var maxChar=64;
var temp = 64;
// count the number of characters in text box 
function charCount()
{	
	textField=document.getElementById("textbox");
	//get text box strings and their length
	actualText=textField.value;
	var len = actualText.length;

	temp=temp - 1;

	if(temp < 0)
	{	
		// We only want the first 64 characters 
		textField.value=actualText.substring(0, maxChar);
		var captionText=document.getElementById("textB");
		captionText.style.color="red";
		return;
		// Prevent temp counter from going negative
		temp=0;
	}

	document.getElementById("textB").innerHTML=temp + " out of 64 characters left";
}


