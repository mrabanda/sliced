var config = {
  apiKey: "AIzaSyC7IuiZeD4Fk_Z5VUp4Y3Rq_U1LTVbSw8s",
  authDomain: "sliced-8f528.firebaseapp.com",
  databaseURL: "https://sliced-8f528.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "9404531697"
};
firebase.initializeApp(config);

var db = firebase.database();
var map = $('#map');
var marker;
var data;
var pizza_locations = [];

db.ref().on('value',function(snap){
  data = snap.val();

  for(let prop in data){
    pizza_locations.push(data[prop])
  }
//   pizza_locations.forEach(function(location){
//     var marker = new google.maps.Marker({
//       position: location.position,
//       map: map,
//       shopName: location.name
//     });

//     var infowindow = new google.maps.InfoWindow({
//       content: location.name
//     });

//     marker.addListener('click', function() {
//       infowindow.open(map, marker);
//     });

//   })
})
var mapOptions = {
    center: {lat: 40.7265884, lng: -73.9716457},
    zoom: 13
}

function initMap() {
  map = new google.maps.Map(map[0], mapOptions);
  addMarker(pizza_locations)

}

function addMarker(feature) {
  var marker = new google.maps.Marker({
    position: feature.location,
    icon: 'assets/img/pizza_icon.png',
    map: map
  });
}
















var pizza_locations = {
    "region": {
        "span": {
            "latitude_delta": 0.08339464750979175,
            "longitude_delta": 0.04422307999999475
        },
        "center": {
            "latitude": 40.727245342041,
            "longitude": -73.9895823
        }
    },
    "total": 4477,
    "businesses": [{
        "is_claimed": false,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/99-cent-fresh-pizza-new-york-5?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 230,
        "name": "99 Cent Fresh Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/99-cent-fresh-pizza-new-york-5?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2122452155",
        "snippet_text": "I say their crust is better then 43rd St.'s $.99 pizza.\nThe sauce and cheese part is as good. \n more spacious restaurant too",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JljCBYLAORsy-28e14tuwA/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/photo/K2i1yT9U4OTYfClC3ttYdQ/ms.jpg",
        "display_phone": "+1-212-245-2155",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "99-cent-fresh-pizza-new-york-5",
        "is_closed": false,
        "location": {
            "cross_streets": "54th St & 55th St",
            "city": "New York",
            "display_address": ["1723 Broadway", "Midtown West", "New York, NY 10019"],
            "geo_accuracy": 8,
            "neighborhoods": ["Midtown West"],
            "postal_code": "10019",
            "country_code": "US",
            "address": ["1723 Broadway"],
            "coordinate": {
                "latitude": 40.7644882,
                "longitude": -73.98246
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-new-york-6?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 281,
        "name": "2 Bros Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-new-york-6?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1475495956,
        "phone": "2127044251",
        "snippet_text": "Place is really small - but pizza is really good! For only a dollar you get a good slice.  No it's not the best pizza in NYC but it's the best you can get...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/4jlxILgHqPrl1bN52cHqOg/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/photo/yLSpT7-f2hpS4aFCbbs-EA/ms.jpg",
        "display_phone": "+1-212-704-4251",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "single_platform",
        "id": "2-bros-pizza-new-york-6",
        "is_closed": false,
        "location": {
            "cross_streets": "Avenue Of The Americas & 5th Ave",
            "city": "New York",
            "display_address": ["31 W 46th St", "Midtown West", "New York, NY 10036"],
            "geo_accuracy": 8,
            "neighborhoods": ["Midtown West"],
            "postal_code": "10036",
            "country_code": "US",
            "address": ["31 W 46th St"],
            "coordinate": {
                "latitude": 40.7567825317383,
                "longitude": -73.9802169799805
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 520,
        "name": "2 Bros Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1477968159,
        "phone": "2127770600",
        "snippet_text": "This pizza shop is a no frills you know what you're getting type place. Decor? Seating? Nah you don't come here for that.  Surprisingly this pizza is pretty...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/CXKLte4VsTw6V2gR1jKl-g/ms.jpg",
        "snippet_image_url": "https://s3-media1.fl.yelpcdn.com/photo/EltBkVYHDr5drkT9JyO_jw/ms.jpg",
        "display_phone": "+1-212-777-0600",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "delivery_menu",
        "id": "2-bros-pizza-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "Cooper Sq & Astor Pl",
            "city": "New York",
            "display_address": ["32 St. Marks Pl", "East Village", "New York, NY 10003"],
            "geo_accuracy": 8,
            "neighborhoods": ["East Village"],
            "postal_code": "10003",
            "country_code": "US",
            "address": ["32 St. Marks Pl"],
            "coordinate": {
                "latitude": 40.72866,
                "longitude": -73.988487
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/99-cents-fresh-pizza-new-york-3?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 81,
        "name": "99 Cents Fresh Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/99-cents-fresh-pizza-new-york-3?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2127800020",
        "snippet_text": "GREAT 1$ pizza!! What else can you say! Open 24/7 and greasy just they way you want it!",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/otbrVqPNXYoyaueYNSg3pQ/ms.jpg",
        "snippet_image_url": "https://s3-media1.fl.yelpcdn.com/photo/vV-SV_X7DPMXwGGJDzTxCg/ms.jpg",
        "display_phone": "+1-212-780-0020",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "99-cents-fresh-pizza-new-york-3",
        "is_closed": false,
        "location": {
            "city": "New York",
            "display_address": ["388 Ave of the Americas", "New York, NY 10014"],
            "geo_accuracy": 9.5,
            "postal_code": "10014",
            "country_code": "US",
            "address": ["388 Ave of the Americas"],
            "coordinate": {
                "latitude": 40.7333667223394,
                "longitude": -73.9996343597412
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/99-cent-fresh-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 155,
        "name": "99 Cent Fresh Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/99-cent-fresh-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1472611206,
        "phone": "2129220257",
        "snippet_text": "Legit pizza, can't complain. Don't understand why people are giving it 2-3 stars - it's a dollar a slice!!! I've had worse pizza that cost way more. \n\nI was...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uYMRflNazpa6SIf98E21WA/ms.jpg",
        "snippet_image_url": "https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png",
        "display_phone": "+1-212-922-0257",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "menu_provider": "single_platform",
        "id": "99-cent-fresh-pizza-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "3rd Ave & Lexington Ave",
            "city": "New York",
            "display_address": ["151 E 43rd St", "Midtown East", "New York, NY 10017"],
            "geo_accuracy": 8,
            "neighborhoods": ["Midtown East"],
            "postal_code": "10017",
            "country_code": "US",
            "address": ["151 E 43rd St"],
            "coordinate": {
                "latitude": 40.7517,
                "longitude": -73.97432
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-new-york-4?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 182,
        "name": "2 Bros Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-new-york-4?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "snippet_text": "I did a swing by this place many times to pick up lunch or dinner. The slices are really big, not too thick, with a good sauce and good tasting Mozzarella....",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/dK61f4PSX6JeunsAUtruHg/ms.jpg",
        "snippet_image_url": "https://s3-media2.fl.yelpcdn.com/photo/ItWrRRbQFtjlvTezUk66FQ/ms.jpg",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "2-bros-pizza-new-york-4",
        "is_closed": false,
        "location": {
            "city": "New York",
            "display_address": ["755 6th Ave", "Chelsea", "New York, NY 10010"],
            "geo_accuracy": 9.5,
            "neighborhoods": ["Chelsea"],
            "postal_code": "10010",
            "country_code": "US",
            "address": ["755 6th Ave"],
            "coordinate": {
                "latitude": 40.7443525488053,
                "longitude": -73.9919924442138
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/percys-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 162,
        "name": "Percy's Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/percys-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2123881355",
        "snippet_text": "Excellent dollar pizza, probably the best in the city. Lemme tell you somethin. NO dollar place i ever been to (besides Vittorio's up on 145th) has good,...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/xnuHmcQ0Ut4D7bBAiGAW4g/ms.jpg",
        "snippet_image_url": "https://s3-media1.fl.yelpcdn.com/photo/TPivduRZ7BiOluxratdhfA/ms.jpg",
        "display_phone": "+1-212-388-1355",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "percys-pizza-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "Avenue Of The Americas & Downing St",
            "city": "New York",
            "display_address": ["190 Bleecker St", "Greenwich Village", "New York, NY 10012"],
            "geo_accuracy": 8,
            "neighborhoods": ["Greenwich Village"],
            "postal_code": "10012",
            "country_code": "US",
            "address": ["190 Bleecker St"],
            "coordinate": {
                "latitude": 40.729076,
                "longitude": -74.001534
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-new-york-5?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 199,
        "name": "2 Bros Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-new-york-5?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2125642733",
        "snippet_text": "$1 FOR A SLICE OF CHEESE PIZZA! Best deal ever. Honestly do they even profit? Because it had a lot of cheese in it and stretches when you bite on it!\n\nFrom,...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_KebAg5vx64pI_dulz_4LQ/ms.jpg",
        "snippet_image_url": "https://s3-media2.fl.yelpcdn.com/photo/zf3LRM2yfmJkRuDeRddVew/ms.jpg",
        "display_phone": "+1-212-564-2733",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "2-bros-pizza-new-york-5",
        "is_closed": false,
        "location": {
            "cross_streets": "38th St & 37th St",
            "city": "New York",
            "display_address": ["557 8th Ave", "Midtown West", "New York, NY 10018"],
            "geo_accuracy": 8,
            "neighborhoods": ["Midtown West", "Hell's Kitchen"],
            "postal_code": "10018",
            "country_code": "US",
            "address": ["557 8th Ave"],
            "coordinate": {
                "latitude": 40.754745,
                "longitude": -73.992004
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/joeys-pepperoni-pizza-new-york-3?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 83,
        "name": "Joey's Pepperoni Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/joeys-pepperoni-pizza-new-york-3?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1477325468,
        "phone": "2122193555",
        "snippet_text": "My favorite $1 slice pizzeria I've been to in the city so far. My gripe with other $1 slice places is that their slices are mostly bread and cheese with a...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZP9_BaJRGnhQ47jGZDNGSQ/ms.jpg",
        "snippet_image_url": "https://s3-media3.fl.yelpcdn.com/photo/5i3k00cZn-SxR5ZwiOWnwg/ms.jpg",
        "display_phone": "+1-212-219-3555",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "menu_provider": "delivery_menu",
        "id": "joeys-pepperoni-pizza-new-york-3",
        "is_closed": false,
        "location": {
            "cross_streets": "Walker St & White St",
            "city": "New York",
            "display_address": ["381 Broadway", "TriBeCa", "New York, NY 10013"],
            "geo_accuracy": 8,
            "neighborhoods": ["TriBeCa", "Chinatown"],
            "postal_code": "10013",
            "country_code": "US",
            "address": ["381 Broadway"],
            "coordinate": {
                "latitude": 40.718254,
                "longitude": -74.003197
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-plus-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 100,
        "name": "2 Bros Pizza Plus",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-plus-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2122068656",
        "snippet_text": "cooked and seasoned well. Crust was crispy but not overdone. $2.99 for 2 slices and a soda. Would come again",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jM0KAkDFmjfCaKYlxucQpg/ms.jpg",
        "snippet_image_url": "https://s3-media1.fl.yelpcdn.com/photo/izZB9qvLWc2nJjB_1yPudw/ms.jpg",
        "display_phone": "+1-212-206-8656",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "2-bros-pizza-plus-new-york",
        "is_closed": false,
        "location": {
            "city": "New York",
            "display_address": ["601 6th Ave", "Flatiron", "New York, NY 10010"],
            "geo_accuracy": 9.5,
            "neighborhoods": ["Flatiron"],
            "postal_code": "10010",
            "country_code": "US",
            "address": ["601 6th Ave"],
            "coordinate": {
                "latitude": 40.7396011627937,
                "longitude": -73.9952166767695
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/champion-pizza-new-york-7?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 64,
        "name": "Champion Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/champion-pizza-new-york-7?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "snippet_text": "Awesome things crust Pizza can't go wrong with this place. One of my favorite Pizza places in LES\n\nThey have dollar slices and $2 topping slices before...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/EVNFIDozNrcDSMyKXeNZmA/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/photo/pyn0gT4A2xTkKSpHjyT4qQ/ms.jpg",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "champion-pizza-new-york-7",
        "is_closed": false,
        "location": {
            "cross_streets": "Rivington St & Delancey St",
            "city": "New York",
            "display_address": ["123 Essex St", "Lower East Side", "New York, NY 10002"],
            "geo_accuracy": 9.5,
            "neighborhoods": ["Lower East Side"],
            "postal_code": "10002",
            "country_code": "US",
            "address": ["123 Essex St"],
            "coordinate": {
                "latitude": 40.719742,
                "longitude": -73.9872791
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/99-cent-fresh-hot-pizza-new-york-2?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 17,
        "name": "99 Cent Fresh Hot Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/99-cent-fresh-hot-pizza-new-york-2?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "7187973841",
        "snippet_text": "They get the job done, decent dollar pizza, good service, ample table space and standing space, and good freshness. I haven't had the opportunity to try the...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/5GFFbM-ArTgjUkcKdRTEJg/ms.jpg",
        "snippet_image_url": "https://s3-media1.fl.yelpcdn.com/photo/q4owfr3IS10oPxUh27NcnA/ms.jpg",
        "display_phone": "+1-718-797-3841",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "99-cent-fresh-hot-pizza-new-york-2",
        "is_closed": false,
        "location": {
            "cross_streets": "Lawrence St & Jay St",
            "city": "New York",
            "display_address": ["51 Willoughby St", "Downtown Brooklyn", "New York, NY 11201"],
            "geo_accuracy": 8,
            "neighborhoods": ["Downtown Brooklyn"],
            "postal_code": "11201",
            "country_code": "US",
            "address": ["51 Willoughby St"],
            "coordinate": {
                "latitude": 40.6922610104084,
                "longitude": -73.9868856221437
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/99-cent-fresh-pizza-new-york-2?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 129,
        "name": "99 Cent Fresh Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/99-cent-fresh-pizza-new-york-2?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2122681461",
        "snippet_text": "This weekend, tried doing a pizza taste test, 99 cent vs expensive.\n\nI have tried others in the area, but because this got good reviews decided to give it a...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Omqkz3k-Ry0uROnXMwhWAA/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/photo/6s-5NzV0vHiL2l09tzms_w/ms.jpg",
        "display_phone": "+1-212-268-1461",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "99-cent-fresh-pizza-new-york-2",
        "is_closed": false,
        "location": {
            "city": "New York",
            "display_address": ["569 9th Ave", "Midtown West", "New York, NY 10011"],
            "geo_accuracy": 9.5,
            "neighborhoods": ["Midtown West", "Hell's Kitchen"],
            "postal_code": "10011",
            "country_code": "US",
            "address": ["569 9th Ave"],
            "coordinate": {
                "latitude": 40.759481,
                "longitude": -73.992591
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/joes-pizza-new-york-7?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 398,
        "name": "Joe's Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/joes-pizza-new-york-7?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1478658737,
        "phone": "2123889474",
        "snippet_text": "Pizza heaven. This is the best pizza in New York State in my opinion.\n\nDon't miss this place. Go try it and you will see what I am talking about.\n\nHappy...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/9E2Um0ddicKyoWS-RGIXyg/ms.jpg",
        "snippet_image_url": "https://s3-media3.fl.yelpcdn.com/photo/-DupdgMjUEZp0JH2BzLsHw/ms.jpg",
        "display_phone": "+1-212-388-9474",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "eat24",
        "id": "joes-pizza-new-york-7",
        "is_closed": false,
        "location": {
            "cross_streets": "4th Ave & Irving Pl",
            "city": "New York",
            "display_address": ["150 E 14th St", "East Village", "New York, NY 10003"],
            "geo_accuracy": 9.5,
            "neighborhoods": ["East Village"],
            "postal_code": "10003",
            "country_code": "US",
            "address": ["150 E 14th St"],
            "coordinate": {
                "latitude": 40.733258,
                "longitude": -73.987604
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 3,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-brooklyn?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
        "review_count": 53,
        "name": "2 Bros Pizza",
        "rating_img_url_small": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-brooklyn?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1475132749,
        "snippet_text": "As a Brooklyn Tech Alum (Class of 2016), I have been to this pizza place countless amounts of times in my four years of high school. Whether it was with...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/n1mCKHcDWCX445Fb0UwIwQ/ms.jpg",
        "snippet_image_url": "https://s3-media2.fl.yelpcdn.com/photo/AiPQ_s-gKPqVWw-Lm7a74g/ms.jpg",
        "rating_img_url_large": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/e8b5b79d37ed/ico/stars/v1/stars_large_3.png",
        "menu_provider": "single_platform",
        "id": "2-bros-pizza-brooklyn",
        "is_closed": false,
        "location": {
            "cross_streets": "Dekalb Ave & Debevoise Pl",
            "city": "Brooklyn",
            "display_address": ["395 Flatbush Ave", "Brooklyn, NY 11201"],
            "geo_accuracy": 9.5,
            "postal_code": "11201",
            "country_code": "US",
            "address": ["395 Flatbush Ave"],
            "coordinate": {
                "latitude": 40.689338684082,
                "longitude": -73.9808959960938
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/joey-pepperonis-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 54,
        "name": "Joey Pepperoni's Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/joey-pepperonis-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1477093098,
        "phone": "2122135558",
        "snippet_text": "Yeah buddy! Have you ever seen a pizza take out joint where you can touch each wall when walking in the door (6 feet wide) but yet the sling some amazing...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/oIJJom_aDNbjosG9I5pw_w/ms.jpg",
        "snippet_image_url": "https://s3-media1.fl.yelpcdn.com/photo/vFkMy4NKmDearO2WGozA3A/ms.jpg",
        "display_phone": "+1-212-213-5558",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "menu_provider": "delivery_menu",
        "id": "joey-pepperonis-pizza-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "27th St & 28th St",
            "city": "New York",
            "display_address": ["493 2nd Ave", "Kips Bay", "New York, NY 10016"],
            "geo_accuracy": 8,
            "neighborhoods": ["Kips Bay"],
            "postal_code": "10016",
            "country_code": "US",
            "address": ["493 2nd Ave"],
            "coordinate": {
                "latitude": 40.74099,
                "longitude": -73.979042
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": false,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/ny-fresh-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 31,
        "name": "NY Fresh Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/ny-fresh-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "phone": "2125862600",
        "snippet_text": "A friend recommended this place with the bold statement of \"this is the best $1 slice in New York.\" Given that I live around the corner, I had to try it....",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/o07qWJCKqfgo9YZ_CY88jA/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/photo/EP0Ecv5Ibwwgwps2ljmkvg/ms.jpg",
        "display_phone": "+1-212-586-2600",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "ny-fresh-pizza-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "53rd St & 52nd St",
            "city": "New York",
            "display_address": ["787 9Th Ave", "Theater District", "New York, NY 10019"],
            "geo_accuracy": 8,
            "neighborhoods": ["Theater District", "Midtown West", "Hell's Kitchen"],
            "postal_code": "10019",
            "country_code": "US",
            "address": ["787 9Th Ave"],
            "coordinate": {
                "latitude": 40.765152,
                "longitude": -73.988144
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "https://m.yelp.com/biz/my-pie-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 344,
        "name": "My Pie",
        "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "https://www.yelp.com/biz/my-pie-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Italian", "italian"],
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1472759078,
        "phone": "2123171850",
        "snippet_text": "NY is famous for their good pizza. There's different variety and My Pie serves up the flatbread style (Rome style pizza). When in NY, one eats from 1...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/vo36uaolTTa5aREAcddJnw/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/photo/XnPwAVTmT4ditVyazt_Ydw/ms.jpg",
        "display_phone": "+1-212-317-1850",
        "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "menu_provider": "single_platform",
        "id": "my-pie-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "57th St & 56th St",
            "city": "New York",
            "display_address": ["696 Lexington Ave", "Midtown East", "New York, NY 10022"],
            "geo_accuracy": 8,
            "neighborhoods": ["Midtown East"],
            "postal_code": "10022",
            "country_code": "US",
            "address": ["696 Lexington Ave"],
            "coordinate": {
                "latitude": 40.76079,
                "longitude": -73.96941
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "https://m.yelp.com/biz/2-bros-pizza-new-york-3?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 168,
        "name": "2 Bros Pizza",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "https://www.yelp.com/biz/2-bros-pizza-new-york-3?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1475555895,
        "phone": "2127770600",
        "snippet_text": "While living in NYC, this was my go to spot after my acting class to get a quick bite to eat. They are more than your typical corner stop pizza in NYC;...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3CZHMTCMfXiJnCOhlt-xPw/ms.jpg",
        "snippet_image_url": "https://s3-media2.fl.yelpcdn.com/photo/4sQ6FlMfqmj3aQwF1qdJ-g/ms.jpg",
        "display_phone": "+1-212-777-0600",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "menu_provider": "single_platform",
        "id": "2-bros-pizza-new-york-3",
        "is_closed": false,
        "location": {
            "cross_streets": "39th St & 40th St",
            "city": "New York",
            "display_address": ["542 9th Ave", "Theater District", "New York, NY 10018"],
            "geo_accuracy": 8,
            "neighborhoods": ["Theater District", "Midtown West", "Hell's Kitchen"],
            "postal_code": "10018",
            "country_code": "US",
            "address": ["542 9th Ave"],
            "coordinate": {
                "latitude": 40.75695,
                "longitude": -73.9935
            },
            "state_code": "NY"
        }
    }, {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "https://m.yelp.com/biz/underground-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 192,
        "name": "Underground Pizza",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "https://www.yelp.com/biz/underground-pizza-new-york?adjust_creative=HEM6lUBvoJlKsi1i80Sh9g&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=HEM6lUBvoJlKsi1i80Sh9g",
        "categories": [
            ["Pizza", "pizza"]
        ],
        "menu_date_updated": 1472609223,
        "phone": "2124254442",
        "snippet_text": "Underground Pizza is so necessary in an ever-growing Lower Manhattan pompous lunch spot scene. That melts spot opening up two doors down? The Juice Shop?...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/TVigbmJt8vKz7dXY9CVOiA/ms.jpg",
        "snippet_image_url": "https://s3-media2.fl.yelpcdn.com/photo/PLNDrqblOPbeEXOaGHO3Wg/ms.jpg",
        "display_phone": "+1-212-425-4442",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "single_platform",
        "id": "underground-pizza-new-york",
        "is_closed": false,
        "location": {
            "cross_streets": "William St & Stone St",
            "city": "New York",
            "display_address": ["3 Hanover Sq", "Financial District", "New York, NY 10004"],
            "geo_accuracy": 8,
            "neighborhoods": ["Financial District"],
            "postal_code": "10004",
            "country_code": "US",
            "address": ["3 Hanover Sq"],
            "coordinate": {
                "latitude": 40.70499,
                "longitude": -74.00961
            },
            "state_code": "NY"
        }
    }]
}
