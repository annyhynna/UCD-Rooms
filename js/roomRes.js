$(function() {
	// Initialize Firebase
		const config = {
		  apiKey: "AIzaSyBsf-LvYbYY_wCjIzyQxfgWxIYe7tjjmqg",
		  authDomain: "ucd-rooms.firebaseapp.com",
		  databaseURL: "https://ucd-rooms.firebaseio.com",
		  storageBucket: "ucd-rooms.appspot.com",
		  messagingSenderId: "153343070309"
		};

		firebase.initializeApp(config);

		$('.js-form').on('submit', event => {
			event.preventDefault();

			var dateStr = $("#datetimepicker1").find("input").val();
			var res = dateStr.split("/");
			var formattedDate = "";
			for (i = 0; i < res.length; i++) { 
				if (i != res.length - 1)
			    	formattedDate += res[i] + "-";
			    else
			    	formattedDate += res[i];
			}
		
			var stObj = document.getElementById("start-time");
			var startTime = stObj.options[stObj.selectedIndex].text;
			var etObj = document.getElementById("end-time");
			var endTime = etObj.options[etObj.selectedIndex].text;
			var userObj = document.getElementById("user");
			var user = userObj.options[userObj.selectedIndex].text;
			var rmObj = document.getElementById("room-size");
			var size = rmObj.options[rmObj.selectedIndex].text;
 
			console.log(formattedDate+" "+startTime+" "+endTime+" "+user+" "+size);

			location.href = "listing.html";
			// myWindow.document.write("<p>I replaced the current window.</p>");

			var ref = firebase.database().ref("Date/"+formattedDate+"/"+user);
			ref.on("value", function(snapshot) {
				console.log(snapshot.val());
			});



			// var app = angular.module("sampleApp", ["firebase"]);
			// app.controller("SampleCtrl", function($scope, $firebaseArray) {
			//   var ref = new Firebase("https://ucd-rooms.firebaseio.com/"+formattedDate+"/"+user);
			//   // create a synchronized array
			//   // click on `index.html` above to see it used in the DOM!
			//   $scope.buildings = $firebaseArray(ref);
			// });

			
		}); // js-form on submit

});
	

