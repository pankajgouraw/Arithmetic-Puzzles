$(document).ready(function(){
	
	// update header
	$("header h3").append(header);

	// puzzle picture update
	const numberA = $('.numberA');
	const numberB = $('.numberB');
	const operation = $('#operation');
	const equal = $('.equal');
	const result = $('.result');

	const incorrect1 = $('#incorrect1');
	const incorrect2 = $('#incorrect2');
	const incorrect4 = $('#incorrect4');
	const correct = $('#correct');

	// default puzzle on first load
    numberA.html("<img class='animated zoomIn' src="+data[0].bigNo+">");
	numberB.html("<img class='animated zoomIn' src="+data[0].bigNo+">");
    incorrect1.html("<img class='animated zoomIn error ' src="+data[0].incorrect1+">");
	incorrect2.html("<img class='animated zoomIn error' src="+data[0].incorrect2+">");
	incorrect4.html("<img class='animated zoomIn error' src="+data[0].incorrect3+">");
	correct.html("<img class='animated zoomIn correct' src="+data[0].correct+">");

	let i = 0;

    // next puzzle
	function next(){
		i++;
		if(data.length <= i){
			console.log("last puzzle");
			i= data.length-1;
			$('.last').fadeIn(1000);
			setTimeout(function(){$('.last').fadeOut(1000);},2000);
			return false;
		}
		
		console.log('next', i);
		numberA.html("<img class='animated zoomIn' src="+data[i].bigNo+">");
		numberB.html("<img class='animated zoomIn' src="+data[i].bigNo+">");

	    incorrect1.html("<img class='animated zoomIn error ' src="+data[i].incorrect1+">");
		incorrect2.html("<img class='animated zoomIn error' src="+data[i].incorrect2+">");
		incorrect4.html("<img class='animated zoomIn error' src="+data[i].incorrect3+">");
		correct.html("<img class='animated zoomIn correct' src="+data[i].correct+">");
	    correct.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect2.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect1.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect4.css({'order':Math.floor((Math.random() * 4) + 1)});
	}

	// prev puzzle
	function prev(){
		i--;

		if(i < 0){
			console.log("first puzzle");
			i= 0;
			$('.first').fadeIn(1000);
			setTimeout(function(){$('.first').fadeOut(1000);},2000);
			return false;
		}

		console.log('prev', i)
		numberA.html("<img class='animated zoomIn' src="+data[i].bigNo+">");
		numberB.html("<img class='animated zoomIn' src="+data[i].bigNo+">");

		incorrect1.html("<img class='animated zoomIn error ' src="+data[i].incorrect1+">");
	    incorrect2.html("<img class='animated zoomIn error' src="+data[i].incorrect2+">");
	    incorrect4.html("<img class='animated zoomIn error' src="+data[i].incorrect3+">");
	    correct.html("<img class='animated zoomIn correct' src="+data[i].correct+">");
	    correct.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect2.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect1.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect4.css({'order':Math.floor((Math.random() * 4) + 1)});
	}


	$('#next').click(function(){
		next();
	});

	$('#prev').click(function(){
		prev();
	})


});