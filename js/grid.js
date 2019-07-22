	var table = $("<table>");
	var tableWrapper = $("<tr>");
	for (i = 0; i <= 5; i++) { //10 "people" in grid
		var designer = getDesignerType(i);
		var designerWork = getDesignerWorkType(i);
		var columnWrapper = $("<td>").addClass("column-wrapper").addClass(designer).addClass(designerWork);
		var innertable = $("<table>");
		var tag = $('<div>').addClass('tag maintag');
		var subtag = $('<div>').addClass('tag subtag');
		innertable.append(tag);
		innertable.append(subtag);

		for (j = 1; j < 10; j++) { //22 guidelines
			var thisid = j + "" + i;
			var personWrapper = $("<tr>");

			var imageFile = 'assets/Images/' + j + '/' + i + '.jpg';
			var journalFile = 'assets/Images/' + j + '/' + String.fromCharCode(97 + i) + '.png';
			var shareLink = '<div class = "share-link"> <a href="#">Share</a></div> ';
			var shareBox = '<div class= "share-box">Shared Successfuly</div> ';
			var person = $('<div>').addClass('person').attr('id', thisid);
			var journalWrapper = $('<div>').addClass('journal-wrapper');
			var journal = '<img class = "journal" src = "' + journalFile + '" /> ';
			var photoWrapper = $('<div>').addClass('photograph-wrapper');
			var photo = '<img class = "lazy photograph" src="' + imageFile + '" />';
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
			case 3:
			case 5:
				return "ux-designer";
			case 2:
			case 4:
			case 6:
				return "service-designer";
			case 1:
				return "videographer";
			case 7:
				return "typographer";
			case 8:
				return "creative";
			default:
				return "unknown";
		}
	}

	function getDesignerWorkType(index) {
		switch (index) {
			case 0:
			case 2:
				return "agency";
			case 1:
			case 3:
			case 4:
			case 5:
			case 6:
				return "in-house";
			case 7:
			case 8:
				return "freelance";
		}
	}

	$('.person').on('click', clickToPerson);

	function clickToPerson(event) {
		event.stopPropagation();
		event.target.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center"
		});
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


	// $(".share-link").click(function () {
	// 	console.log('shared');
	// 	$('.share-box').removeClass('hidden');
	// 	$('.share-box').addClass('show');
	// })


	$(".share-link").click(function(){
    // $(".share-box").slideToggle();
  // $(this).nextElementSibling.slideToggle();
  // var selectedShareBox = $(this)["0"].nextElementSibling;
  // selectedShareBox.slideToggle();
  console.log($(this));

  });

  // $(document).on('click', '.share-link' , function(){
  //     $(this).children('.share-box').show();
  // }):
  //
  // $('share-link').click(function(e){
	//   $(e.currentTarget).toggle();
	// });


	//
	// $(document).on('click', '.share-link' , function(){
	//     $(this).hide(); // hides only the element that was clicked with the class .the-class
	// }):
