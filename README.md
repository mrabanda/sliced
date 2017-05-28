# Bit$ie

### An app resource enabling you to enjoy all the glitz and glam of New York's nightlife @ 1/3 the cost!

#### [Live on the web here](http://bitsie.herokuapp.com/)

### What you can do

- Users can enter their location to get results and directions to the nearest bars and pizza shops in Manhattan.

### Web Technologies Used

- Firebase
- jQuery
- Materialize
- Google Maps API
- Yelp API
- Heroku

### How it works

- Pizza shop and bar data is obtained from the Yelp API then saved to Firebase.

- Openning the app initilizes a connection to Firebase and pushes the data for pizza shops and bars into two separate arrays.

- Google maps is also initialized and uses the data in the arrays to add custom markers at each business location with `google.maps.Marker`.

- When a user location is entered and the "Submit" button is clicked, an array containing the latitude and longitude for each business is created and `google.maps.DistanceMatrixService` is used to determine the distance from the user location.

- Distance results are sorted then the 5 nearest pizza shops and 5 nearest bars are displayed in the results list using jQuery.

- Clicking on a result shows directions on the map and turn by turn

- Clicking on a map marker shows a short description of the business.
