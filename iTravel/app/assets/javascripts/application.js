// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs

//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require materialize
//= require turbolinks
//= require_tree .

// Initialize the country list to the window
$(document).ready(() => {
  this.countryList = {
    "Andorra": null,
    "United Arab Emirates": null,
    "Afghanistan": null,
    "Antigua and Barbuda": null,
    "Anguilla": null,
    "Albania": null,
    "Armenia": null,
    "Netherlands Antilles": null,
    "Angola": null,
    "Antarctica": null,
    "Argentina": null,
    "American Samoa": null,
    "Austria": null,
    "Australia": null,
    "Aruba": null,
    "Aland Islands": null,
    "Azerbaijan": null,
    "Bosnia and Herzegovina": null,
    "Barbados": null,
    "Bangladesh": null,
    "Belgium": null,
    "Burkina Faso": null,
    "Bulgaria": null,
    "Bahrain": null,
    "Burundi": null,
    "Benin": null,
    "Saint Barthélemy": null,
    "Bermuda": null,
    "Brunei": null,
    "Bolivia": null,
    "British Antarctic Territory": null,
    "Brazil": null,
    "Bahamas": null,
    "Bhutan": null,
    "Bouvet Island": null,
    "Botswana": null,
    "Belarus": null,
    "Belize": null,
    "Canada": null,
    "Cocos Islands": null,
    "Congo - Kinshasa": null,
    "Central African Republic": null,
    "Congo - Brazzaville": null,
    "Switzerland": null,
    "Ivory Coast": null,
    "Cook Islands": null,
    "Chile": null,
    "Cameroon": null,
    "China": null,
    "Colombia": null,
    "Costa Rica": null,
    "Serbia and Montenegro": null,
    "Canton and Enderbury Islands": null,
    "Cuba": null,
    "Cape Verde": null,
    "Christmas Island": null,
    "Cyprus": null,
    "Czech Republic": null,
    "East Germany": null,
    "Germany": null,
    "Djibouti": null,
    "Denmark": null,
    "Dominica": null,
    "Dominican Republic": null,
    "Algeria": null,
    "Ecuador": null,
    "Estonia": null,
    "Egypt": null,
    "Western Sahara": null,
    "Eritrea": null,
    "Spain": null,
    "Ethiopia": null,
    "Finland": null,
    "Fiji": null,
    "Falkland Islands": null,
    "Micronesia": null,
    "Faroe Islands": null,
    "French Southern and Antarctic Territories": null,
    "France": null,
    "Metropolitan France": null,
    "Gabon": null,
    "United Kingdom": null,
    "Grenada": null,
    "Georgia": null,
    "French Guiana": null,
    "Guernsey": null,
    "Ghana": null,
    "Gibraltar": null,
    "Greenland": null,
    "Gambia": null,
    "Guinea": null,
    "Guadeloupe": null,
    "Equatorial Guinea": null,
    "Greece": null,
    "South Georgia and the South Sandwich Islands": null,
    "Guatemala": null,
    "Guam": null,
    "Guinea-Bissau": null,
    "Guyana": null,
    "Hong Kong SAR China": null,
    "Hong Kong": null,
    "Heard Island and McDonald Islands": null,
    "Honduras": null,
    "Croatia": null,
    "Haiti": null,
    "Hungary": null,
    "Indonesia": null,
    "Ireland": null,
    "Israel": null,
    "Isle of Man": null,
    "India": null,
    "British Indian Ocean Territory": null,
    "Iraq": null,
    "Iran": null,
    "Iceland": null,
    "Italy": null,
    "Jersey": null,
    "Jamaica": null,
    "Jordan": null,
    "Japan": null,
    "Johnston Island": null,
    "Kenya": null,
    "Kyrgyzstan": null,
    "Cambodia": null,
    "Kiribati": null,
    "Comoros": null,
    "Saint Kitts and Nevis": null,
    "North Korea": null,
    "South Korea": null,
    "Kuwait": null,
    "Cayman Islands": null,
    "Kazakhstan": null,
    "Laos": null,
    "Lebanon": null,
    "Saint Lucia": null,
    "Liechtenstein": null,
    "Sri Lanka": null,
    "Liberia": null,
    "Lesotho": null,
    "Lithuania": null,
    "Luxembourg": null,
    "Latvia": null,
    "Libya": null,
    "Morocco": null,
    "Monaco": null,
    "Moldova": null,
    "Montenegro": null,
    "Saint Martin": null,
    "Madagascar": null,
    "Marshall Islands": null,
    "Midway Islands": null,
    "Macedonia": null,
    "Mali": null,
    "Myanmar": null,
    "Mongolia": null,
    "Macau SAR China": null,
    "Macau": null,
    "Northern Mariana Islands": null,
    "Martinique": null,
    "Mauritania": null,
    "Montserrat": null,
    "Malta": null,
    "Mauritius": null,
    "Maldives": null,
    "Malawi": null,
    "Mexico": null,
    "Malaysia": null,
    "Mozambique": null,
    "Namibia": null,
    "New Caledonia": null,
    "Niger": null,
    "Norfolk Island": null,
    "Nigeria": null,
    "Nicaragua": null,
    "Netherlands": null,
    "Norway": null,
    "Nepal": null,
    "Dronning Maud Land": null,
    "Nauru": null,
    "Neutral Zone": null,
    "Niue": null,
    "New Zealand": null,
    "Oman": null,
    "Panama": null,
    "Pacific Islands Trust Territory": null,
    "Peru": null,
    "French Polynesia": null,
    "Papua New Guinea": null,
    "Philippines": null,
    "Pakistan": null,
    "Poland": null,
    "Saint Pierre and Miquelon": null,
    "Pitcairn": null,
    "Puerto Rico": null,
    "Palestinian Territory": null,
    "Portugal": null,
    "U.S. Miscellaneous Pacific Islands": null,
    "Palau": null,
    "Paraguay": null,
    "Panama Canal Zone": null,
    "Qatar": null,
    "Outlying Oceania": null,
    "European Union": null,
    "Reunion": null,
    "Romania": null,
    "Serbia": null,
    "Russia": null,
    "Rwanda": null,
    "Saudi Arabia": null,
    "Solomon Islands": null,
    "Seychelles": null,
    "Sudan": null,
    "Sweden": null,
    "Singapore": null,
    "Saint Helena": null,
    "Slovenia": null,
    "Svalbard and Jan Mayen": null,
    "Slovakia": null,
    "Sierra Leone": null,
    "San Marino": null,
    "Senegal": null,
    "Somalia": null,
    "Suriname": null,
    "Sao Tome and Principe": null,
    "Union of Soviet Socialist Republics": null,
    "El Salvador": null,
    "Syria": null,
    "Swaziland": null,
    "Turks and Caicos Islands": null,
    "Chad": null,
    "French Southern Territories": null,
    "Togo": null,
    "Thailand": null,
    "Tajikistan": null,
    "Tokelau": null,
    "East Timor": null,
    "Turkmenistan": null,
    "Tunisia": null,
    "Tonga": null,
    "Turkey": null,
    "Trinidad and Tobago": null,
    "Tuvalu": null,
    "Taiwan": null,
    "Tanzania": null,
    "Ukraine": null,
    "Uganda": null,
    "United States Minor Outlying Islands": null,
    "United States": null,
    "Uruguay": null,
    "Uzbekistan": null,
    "Vatican": null,
    "Saint Vincent and the Grenadines": null,
    "North Vietnam": null,
    "Venezuela": null,
    "British Virgin Islands": null,
    "U.S. Virgin Islands": null,
    "Vietnam": null,
    "Vanuatu": null,
    "Wallis and Futuna": null,
    "Wake Island": null,
    "Samoa": null,
    "People's Democratic Republic of Yemen": null,
    "Yemen": null,
    "Mayotte": null,
    "South Africa": null,
    "Zambia": null,
    "Zimbabwe": null,
    "Unknown or Invalid Regio": null,
  }
});

// Add the event listener to the datepicker
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

$(document).ready(function(){
  try {
    // Try to add different event listenrers to different components
    $('.slider').slider({
        indicators: false
    });

    $('.parallax').parallax({
    });

    $('.carousel').carousel();

    $('.fixed-action-btn').floatingActionButton();

    $('.modal').modal();

    // now you can open modal from code
    $('#modal1').modal('open');

    // or by click on trigger
    $('.trigger-modal').modal();

    $('.materialboxed').materialbox();
  } catch(err) {
    console.log(err);
  }



});


// indicators	Set to false to hide slide indicators. (Default: True)
// height	Set height of slider. (Default: 400)
// transition	Set the duration of the transition animation in ms. (Default: 500)
// interval	Set the duration between transitions in ms. (Default: 6000)
