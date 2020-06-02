
function postToGoogle() {
                var field1 = $("#nameField").val();
                var field2 = $("#emailField").val();
                var field3 = $("#mobField").val();
                var field4 = $("#mesField").val();
 				
				if(field1 == ""){
					alert('Please Fill Your Name');
					document.getElementById("nameField").focus();
					return false;
				}
				if(field2 == ""){
					alert('Please Fill Your Email');
					document.getElementById("emailField").focus();
					return false;
				}
				if(field3 == "" || field3.length > 10 || field3.length < 10){
					alert('Please Fill Your Mobile Number');
					document.getElementById("mobField").focus();
					return false;
				}


				
	
                $.ajax({
                    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeMJORhsquY44pnGUR8ux7v1METIbBjQiODdMUvdMLhRa14iA/formResponse",
					data: {"entry.2005620554": field1, "entry.1045781291": field2, "entry.1166974658": field3, "entry.839337160": field4},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
							
						}
                });
				return false;
            }
