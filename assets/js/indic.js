	
		var user_uid = '';
		var social_portal = 'FB';
		var user_name = '';

		function loadcssfile(filename){
			 
			  var fileref=document.createElement("link");
			  fileref.setAttribute("rel", "stylesheet");
			  fileref.setAttribute("type", "text/css");
			  fileref.setAttribute("href", filename);
			  document.getElementsByTagName("head")[0].appendChild(fileref);
		}
		
		loadcssfile("https://indiccomments.youngsoch.in/assets/css/bootstrap.css");
		loadcssfile("https://indiccomments.youngsoch.in/assets/css/bootstrap-responsive.css");
		loadcssfile("https://indiccomments.youngsoch.in/assets/css/indic.css");
		var imported = document.createElement('script');
		imported.src = 'https://www.google.com/jsapi?callback=loadTransliterate';
		document.getElementsByTagName('head')[0].appendChild(imported);
		function loadTransliterate(){
			google.load("elements", "1", {
				"packages": "transliteration",
				"callback" : startIndicComments
			});	
		
		}
		function startIndicComments() {
		
			
			window.fbAsyncInit = function () {
				FB.init({
					//appId: '466770620024920', // App ID
					appId: '384623184961308',
					status: true, // check login status
					cookie: true, // enable cookies to allow the server to access the session
					xfbml: true // parse XFBML
				});

				// Additional init code here

			};
			
			

			// Load the SDK Asynchronously
			(function (d, debug) {
				var js, id = 'facebook-jssdk',
					ref = d.getElementsByTagName('script')[0];
				if (d.getElementById(id)) {
					return;
				}
				js = d.createElement('script');
				js.id = id;
				js.async = true;
				js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
				ref.parentNode.insertBefore(js, ref);
			}(document, /*debug*/ false));


			//document.getElementById("indicComment")
			if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else { // code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					//document.body.innerHTML = "<div id=\"fb-root\"></div>" + document.body.innerHTML ;


					FB.Event.subscribe('auth.login', function (response) {
						FB.api('/me', function (response1) {
							user_name = response1.name;
							user_uid = response1.id;
							document.getElementById("profile-pic").innerHTML = "<img class=\"img-rounded\" style=\"clear:both;\" src=\"http://graph.facebook.com/" + user_uid + "/picture\" alt=\"profile_pic\" width=\"50\" height=\"50\">";
						});
					});

					alert.show(xmlhttp.responseText);

					document.getElementById("indicComment").innerHTML = xmlhttp.responseText;

					onLoad();

					FB.getLoginStatus(function (response) {

						if (response.status === 'connected') {

							FB.api('/me', function (response) {
								user_name = response.name;
								user_uid = response.id;
								document.getElementById("profile-pic").innerHTML = "<img class=\"img-rounded\" style=\"clear:both;\" src=\"http://graph.facebook.com/" + user_uid + "/picture\" alt=\"profile_pic\" width=\"50\" height=\"50\">";
							});
						} else if (response.status === 'not_authorized') {
							// FB.login();
						} else {
							// FB.login();
						}
					});

				}
			}
			
			xmlhttp.open("GET", "https://indiccomments.youngsoch.in/loadComments.php?page_uid=" + page_uid, true);
			xmlhttp.send();


		}
		
		//	google.setOnLoadCallback(onLoad);
		// Load the Google Transliterate API


		function onLoad() {
			var options = {
				sourceLanguage: 'en',
				destinationLanguage: ['hi','am', 'ar', 'bn', 'zh', 'el', 'gu', 'kn', 'ml', 'mr', 'ne', 'or', 'fa', 'pa', 'ru', 'sa', 'si', 'sr', 'ta', 'te', 'ti', 'ur'],
				shortcutKey: 'ctrl+g',
				transliterationEnabled: true
			};

			// Create an instance on TransliterationControl with the required
			// options.
			var control = new google.elements.transliteration.TransliterationControl(options);

			// Enable transliteration in the textfields with the given ids.
			var ids = ["ic_new_comment"];
			control.makeTransliteratable(ids);

			// Show the transliteration control which can be used to toggle between
			// English and Hindi and also choose other destination language.
			control.showControl('translControl');
		}

		function submitComment() {
			FB.getLoginStatus(function (response) {

				if (response.status != 'connected') {
					FB.login();
				} else {
					if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else { // code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function () {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
							location.reload();
						}
					}


					xmlhttp.open("POST", "https://indiccomments.youngsoch.in/insertComment.php", true);
					xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

					xmlhttp.send("comment_text=" + ic_new_comment.value + "&user_uid=" + user_uid + "&social_portal=" + social_portal + "&page_uid=" + page_uid + "&user_name=" + user_name);
					//alert("hahah");


				}



			});

		}
