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


$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

$('input.autocomplete').autocomplete({
  data: {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  },
  limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  onAutocomplete: function(val) {
    // Callback function when value is autcompleted.
  },
  minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});
