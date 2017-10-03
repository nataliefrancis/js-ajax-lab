$(document).ready(function(){
	event.preventDefault();

	let request = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
		.done(function(data){
			// console.log(data);
			let catString = JSON.parse(data);
			for (i=0; i<catString.length; i++) {
				$("ul").append("<li>" +catString[i].name+ "-" +catString[i].note+ "</li><br>");
			}
		});

	$("#new-cat").on("submit", function(event){
        event.preventDefault();  
        var catName = $('#cat-name').val();
        var catNote = $('#cat-note').val();
        $('#cats').append('<li>'+ catName + '-' + catNote + '</li>');


	    newCat = {
	    	name: catName,
	    	note: catNote,
	    };

	    $.ajax ({
	    	method: "POST",
	    	data: JSON.stringify(newCat),
	    	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	    });
    });

});

