
function doActions() { 
        
        //  ---------------------------------
        // | Close faults with various codes | 
        //  ---------------------------------
  
     console.log("Installing handlers.");
 
     $("a[name^='timecheck_']").each(function() { 
	
	var thisbutton = $(this);

	//console.log("Adding handler:");
	//console.log(thisbutton);

	thisbutton.click(function() {
 
		var thisthis = $(this);
		var menuName =thisthis.attr("name");
		
		var menuVals = menuName.split("_");
		var monthClicked = menuVals[1];
		var yearClicked = menuVals[2];

		monthClicked = ucfirst(monthClicked);
		data = parseRows(monthClicked,yearClicked);
		
		var taskID = "";
		var taskComment = "";

		if ((monthClicked in data) && ("taskID"  in data[monthClicked])) {
            
			taskID = data[monthClicked]["taskID"];
            		taskComment = data[monthClicked]["taskComment"];
            
            		// Append the ICM reference to the task bar heading
            		var currTitle = $("#dialog-confirm").attr("title");
            			$("#dialog-confirm").attr("title",currTitle + " (Using " + taskID + " - " + taskComment + ")");
		}


		checkDays(monthClicked,yearClicked);

		/*	
    		$("#dialog-confirm" ).dialog({
      
			resizable: false,
      			height:450,
      			width:500, 
      			modal: true,
      			position: { my: "top+50", at: "top", of: "div#task_time_worked_expanded" },
      			buttons: {
        			Done: function() {
          				$( this ).dialog( "close" );
        			}
      			}
    		});
		*/
	
	});

      });
    
}

