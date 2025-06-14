# Meal-Recipes_API-JS

Overview
This is a simple web application that allows users to search for meal recipes using the TheMealDB API. 
When a user enters a dish name in the search bar, the app fetches and displays recipes with images and basic information.
Features
•	Search for recipes by meal name
•	Responsive card layout that works on different screen sizes
•	Clear visual display of meal images and names
•	"View More" button (placeholder for future functionality)
Technologies Used
•	HTML5
•	CSS3 (with Bootstrap for responsive design)
•	JavaScript (ES6)
•	Fetch API for asynchronous data retrieval
•	TheMealDB API
Code Structure
The main functionality is contained in a single JavaScript file with the following components:
1.	DOM Element Selection:
o	searchInput: The input field for meal searches
o	searchBtn: The search button
2.	Main Function:
o	getData(value): An async function that:
	Fetches data from TheMealDB API
	Processes the JSON response
	Dynamically creates recipe cards
	Handles empty search cases
3.	Event Listener:
o	Attached to the search button to trigger searches
o	Includes basic validation to prevent empty searches


Usage
1.	Enter a meal name in the search input (e.g., "pasta", "pizza", "chicken")
2.	Click the search button
3.	View the displayed recipe cards
4.	(Future enhancement) Click "View More" to see detailed recipe information
 Note
•	The "View More" button currently doesn't have functionality
•	Limited styling for the recipe cards
Future Enhancements
1.	Implement detailed recipe view when clicking "View More"
2.	Add category and area filters
3.	Implement favorites functionality
4.	Add pagination for results
5.	Improve error handling and user feedback

API Reference
The project uses the free TheMealDB API
•	https://www.themealdb.com/api/json/v1/1/search.php?s={meal_name}

Live Demo
https://foodapijs.netlify.app
