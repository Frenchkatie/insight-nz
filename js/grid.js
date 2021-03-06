var table = $("<table>");
var tableWrapper = $("<tr>");
for (i = 0; i <= 10; i++) { //10 "people" in grid
	var designer = getDesignerType(i);
	var designerWork = getDesignerWorkType(i);
	var columnWrapper = $("<td>").addClass("column-wrapper").attr('data-designer', designer).attr('data-designerWork', designerWork);
	var innertable = $("<table>");
	var tag = $('<div>').addClass('tag maintag');
	var subtag = $('<div>').addClass('tag subtag');

	innertable.append(tag);
	innertable.append(subtag);

	for (j = 1; j < 22; j++) { //22 guidelines
		var thisid = j + "" + i;
		var personWrapper = $("<tr>");

		var shareLink = '<div class = "share-link"> Share<img class="share-arrow" src="assets/icons/share.png" /></div> ';
		var shareBox = '<div class= "share-box"><p>Share to</p><ul><li>Twitter</li><li>Facebook</li><li>Pinterest</li></ul></div> ';


		var imageFile = 'assets/Images/' + j + '/' + i + '.jpg';
		var journalFile = 'assets/Images/' + j + '/' + String.fromCharCode(97 + i) + '.png';
		var person = $('<div>').addClass('person').attr('id', thisid);
		var journalWrapper = $('<div>').addClass('journal-wrapper current');
		var journal = '<img class = "lazy journal" src="assets/Images/placeholder.png" data-src = "' + journalFile + '" onError="$(this).hide();" /> ';

		var photoWrapper = $('<div>').addClass('photograph-wrapper');
		var photo = '<img class = "lazy photograph" data-src="' + imageFile + '" />';
		person.append(journalWrapper.append(journal));
		person.append(photoWrapper.append(photo));
		person.append(shareLink);
		person.append(shareBox);

		personWrapper.append(person);
		innertable.append(personWrapper);
	}
	columnWrapper.append(innertable);
	tableWrapper.append(columnWrapper);
}
table.append(tableWrapper);
$('.grid').append(table);

function getDesignerType(index) {
	switch (index) {
		case 0:
			return "creative";
		case 2:
		case 4:
		case 6:
			return "service-designer";
		case 1:
			return "graphic-designer";
		case 3:
			return "virtual-reality-designer";
		case 5:
		case 8:
			return "ux-designer";
		case 7:
			return "videographer";
		case 9:
			return "digital-designer";
		default:
			return "service-designer";
	}
}

function getDesignerWorkType(index) {
	switch (index) {
		case 0:
		case 1:
			return "freelance";
		case 2:
		case 3:
		case 4:
		case 5:
		case 7:
		case 9:
			return "in-house";
		case 6:
		case 8:
			return "agency";
	}
}

function toString(classStr) {
	return classStr.replace("-", " ");
}

$('.photograph-wrapper').on('click', clickToPerson);

function clickToPerson(event) {
	var person = $(this).closest('.column-wrapper');
	console.log(person);
	event.stopPropagation();
	event.target.scrollIntoView({
		behavior: "smooth",
		block: "center",
		inline: "center"
	});
	var filter = person.attr('data-designer');
	$('.grid-breadcrumb-text').text(toString(filter));
}

$(".top-bar").mouseenter(function () {
	var elem = $(this);
	if (elem.hasClass("active")) {
		//do nothing
	} else {
		$(".top-bar").removeClass("hover");
		$(".top-bar").addClass("unactive");
		elem.removeClass("unactive");
		elem.toggleClass("hover");
	}
	event.preventDefault();
}).mouseleave(function () {
	$(".top-bar").removeClass("hover");
	$(".top-bar").removeClass("unactive");
});


function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollLeft();
	var docViewBottom = docViewTop + $(window).width();

	var elemTop = $(elem).offset().left;
	var elemBottom = elemTop + $(elem).width();
	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var url = window.location.href;
var position = (url.substring(url.indexOf("#") + 1)).charAt(1);
var designer = getDesignerType(parseInt(position));
$('.grid-breadcrumb-text').text(toString(designer));

$("#rotateBtn").click(function () {
	$('.holder').children('div').toggleClass('current');
});

$('.share-link').click(function () {
	event.stopPropagation();
	var link = $(this);
	link.next().show();
});

$(document).bind('click', function (e) {
	if ($('.share-box').has(e.target).length == 0) {
		$('.share-box').hide();
	}
});