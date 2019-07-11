$(document).ready(function(){
	
	// update header
	$("header h3").append(header);

	function backgroundSound(){
        	$("#backgroundSound")[0].play();
        	// $("#backgroundSound")[0].loop = true; 
        }
        backgroundSound();

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
	numberB.html("<img class='animated zoomIn' src="+data[0].smallNo+">");
    incorrect1.html("<img id='error1' class='ui-widget-content animated zoomIn error ' src="+data[0].incorrect1+">");
	incorrect2.html("<img id='error2' class='ui-widget-content animated zoomIn error' src="+data[0].incorrect2+">");
	incorrect4.html("<img id='error3' class='ui-widget-content animated zoomIn error' src="+data[0].incorrect3+">");
	correct.html("<img id='rightAns' class='ui-widget-content animated zoomIn correct' src="+data[0].correct+">");

	let i = 0;



	$('#next').click(function(){
		//play button click sound
		audioBeep();
		next();
		// drag and drop drop and destroy and assign again...
	    dragAndDrop();
	});

	$('#prev').click(function(){
        //play button click sound
		audioBeep();
		prev();
		// drag and drop drop and destroy and assign again...
	    dragAndDrop();
	})



    // next puzzle
	function next(){

		i++;
		if(data.length <= i){
			console.log("last puzzle");
			i= data.length-1;
			$('.last').show();
			setTimeout(function(){$('.last').fadeOut(1000);},2000);
			return false;
		}
		
		console.log('next', i);
		numberA.html("<img class='animated zoomIn' src="+data[i].bigNo+">");
		numberB.html("<img class='animated zoomIn' src="+data[i].smallNo+">");

	    incorrect1.html("<img id='error1' class='ui-widget-content animated zoomIn error ' src="+data[i].incorrect1+">");
	    incorrect2.html("<img id='error2' class='ui-widget-content animated zoomIn error' src="+data[i].incorrect2+">");
	    incorrect4.html("<img id='error3' class='ui-widget-content animated zoomIn error' src="+data[i].incorrect3+">");
	    correct.html("<img id='rightAns' class='ui-widget-content animated zoomIn correct' src="+data[i].correct+">");
	    
	    correct.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect2.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect1.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect4.css({'order':Math.floor((Math.random() * 4) + 1)});

	}
	// end next function

	// prev puzzle
	function prev(){

		i--;

		if(i < 0){
			console.log("first puzzle");
			i= 0;
			$('.first').show();
			setTimeout(function(){$('.first').fadeOut(1000);},2000);
			return false;
		}

		console.log('prev', i);
		numberA.html("<img class='animated zoomIn' src="+data[i].bigNo+">");
		numberB.html("<img class='animated zoomIn' src="+data[i].smallNo+">");

	    incorrect1.html("<img id='error1' class='ui-widget-content animated zoomIn error ' src="+data[i].incorrect1+">");
		incorrect2.html("<img id='error2' class='ui-widget-content animated zoomIn error' src="+data[i].incorrect2+">");
		incorrect4.html("<img id='error3' class='ui-widget-content animated zoomIn error' src="+data[i].incorrect3+">");
		correct.html("<img id='rightAns' class='ui-widget-content animated zoomIn correct' src="+data[i].correct+">");
	    
	    correct.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect2.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect1.css({'order':Math.floor((Math.random() * 4) + 1)});
		incorrect4.css({'order':Math.floor((Math.random() * 4) + 1)});



	} //end prev function





	// drag and drop function 
	function dragAndDrop(){

		    $( "#error1").draggable({
				      revert:true,
				      stop:function(){
				      	console.log('false...');
				      	tryAgain()
			 	      }
			});

			$( "#error2").draggable({
				      revert:true,
				      stop:function(){
				      	console.log('false...');
				      	tryAgain()
				      }
			});
			$( "#error3").draggable({
				      revert:true,
				      stop:function(){
				      	console.log('false...');
				      	tryAgain();
				      }
			});
			$("#rightAns").draggable({
				      revert: "invalid",
					  containment: "document",
					  // helper: "clone",
					  cursor: "move"
			});

			// drop element
			$("#droppable").droppable({
					accept: "#rightAns",
					// activeClass: "ui-state-highlight",
					drop: function( event, ui ) {
						wellDone();
						console.log("true")
					}
		    });

		}
		dragAndDrop();


		// beep sound audio on button click
        function audioBeep(){
            $("#button")[0].play();
        }

        function wellDone(){
        	$("#correctAnswer")[0].play();
        }

        function tryAgain(){
        	$("#incorrectAnswer")[0].play();
        }




});