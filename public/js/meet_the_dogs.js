var products = "";
var breeds = "";
var genders = "";
var energy_levels = "";
var ease_of_trainings = "";

window.CP.exitedLoop(1);

$(".filter-breed").append(breeds);
$(".filter-gender").append(genders);
$(".filter-energy_level").append(energy_levels);
$(".filter-ease_of_training").append(ease_of_trainings);

var filtersObject = {};

//on filter change
$(".filter").on("change",function () {
    console.log("change")
	var filterName = $(this).data("filter"),
		filterVal = $(this).val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {if (window.CP.shouldStopExecution(2)){break;}
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	 }
	}
window.CP.exitedLoop(2);

	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
});

//on search form submit

$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();
	$(".product").hide();
	$(".product").each(function() {
		var name = $(this).data("name").toLowerCase(),
            breed = $(this).data("breed").toLowerCase(),
			gender = $(this).data("gender").toLowerCase(),
			energy_level = $(this).data("energy_level").toLowerCase(),
			ease_of_training = $(this).data("ease_of_training").toLowerCase();

		if (name.indexOf(query) > -1 || breed.indexOf(query) > -1 || gender.indexOf(query) > -1 || energy_level.indexOf(query) > -1 || ease_of_training.indexOf(query) > -1) {
			$(this).show();
		}
	});
});

$(document).ready(function() {
    
	var filterName = $(".filter").data("filter"),
		filterVal = $(".filter").val();
	
	if (filterVal == "") {
		delete filtersObject[filterName];
	} else {
		filtersObject[filterName] = filterVal;
	}
	
	var filters = "";
	
	for (var key in filtersObject) {if (window.CP.shouldStopExecution(2)){break;}
	  	if (filtersObject.hasOwnProperty(key)) {
			filters += "[data-"+key+"='"+filtersObject[key]+"']";
	 	 }
	}
window.CP.exitedLoop(2);

	
	if (filters == "") {
		$(".product").show();
	} else {
		$(".product").hide();
		$(".product").hide().filter(filters).show();
	}
    console.log(filterVal)

});
