/*
 * AJAX CALL
 */

function ajaxGet() {				
var ajaxRequest; 

try {
	// Opera 8.0+, Firefox, Safari
	ajaxRequest = new XMLHttpRequest();
} catch (e) {
	// Internet Explorer Browsers
	try {
		ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			// Something went wrong
			alert("Your browser broke!");
			return false;
		}
	}
}
ajaxRequest.onreadystatechange = function() {
	if (ajaxRequest.readyState == 4) {
		if (ajaxRequest.status == 200) {
			var response = ajaxRequest.responseText;
				
			try {
				transformed = JSON.parse(response);
			
				var html = "";								
				for ( var i = 0; i < transformed.length; i++) {
					
					html += "<table class=\"tablestyle\" style=\"width: 500px;\">";
					
					html += "<tr>";
					html += "<th class=\"tablestyle_highlight\" style=\"width: 250px;\">Firms</th>";
					html += "<th class=\"tablestyle_highlight\" style=\"width: 250px;\">Url</th>";
					html += "</tr>";
				
					html += "<tr>";																		
					html += "<td class=\"tablestyle\">" + transformed[i]["name"] + "</td>";			
					html += "<td class=\"tablestyle\" nowrap><a href=\""+ transformed[i]["url"]  +"\">" + transformed[i]["url"] + "</a></td>";												
					html += "</tr>"; // end table row														
					html +=  "</table>" +
					"<br /><br />"; 
								
				} // end for
				
				document.getElementById("tableView").innerHTML = html;																			
				document.getElementById("tableView").style.display = "block";									
			}
			catch(e) {						
				if (response) {							
					document.getElementById("tableView").innerHTML = response;
				}
				else{							
					document.getElementById("tableView").innerHTML = "There are no firms available";
				}
			}
		}
	}
}

ajaxRequest.open("GET", ("/ajaxprocessor"), true);
ajaxRequest.setRequestHeader("Content-type", "application/json");
ajaxRequest.send();
}