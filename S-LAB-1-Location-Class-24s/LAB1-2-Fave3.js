/*LAB 1-2: JAVASCRIPT CLASSES*/
//FAVE FRIEND CLASS
class Friend {
	constructor (nameParam, phoneNumberParam) {
		this.name = nameParam;
		this.number = phoneNumberParam;
	}
}

window.onload = function(){
	var formHandle = document.forms.fave_form;
	var faveThree = [];//FAVE 3 ARRAY
	function processForm (){
		//FIRST FRIEND
		var nameOne = formHandle.name1.value;
		var phoneOne = formHandle.phone1.value;
		console.log(nameOne, phoneOne);
		var friendOne = new Friend (nameOne, phoneOne);

		//SECOND FRIEND
		var nameTwo = formHandle.name2.value;
		var phoneTwo = formHandle.phone2.value;
		console.log(nameTwo, phoneTwo);
		var friendTwo = new Friend (nameTwo, phoneTwo);


		//THIRD FRIEND
		var nameThree = formHandle.name3.value;
		var phoneThree = formHandle.phone3.value;
		console.log(nameThree, phoneThree);
		var friendThree = new Friend (nameThree, phoneThree);

		// PUSH TO ARRAY OF FRIENDS
		faveThree.push(friendOne, friendTwo, friendThree);
		console.log(faveThree);
		
		// HIDE FORM
		formHandle.style.display = "none";
		
		// LOOP TROUGH THE ARRAY AND DISPLAY THE LIST
		var friends = document.getElementById("faveBlock");
		friends.style.display="block";

		var list = document.getElementById("faveList");
		for(let i = 0; i < faveThree.length; i++) {
			
			list.innerHTML += "<li>" + faveThree[i].name + "</li>";
		}

		return false;
	}


	formHandle.onsubmit = processForm;

}//END OF onload FUNCTION