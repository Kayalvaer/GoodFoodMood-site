//Navbar icon function
document.querySelector('.nav-icon').addEventListener('click', () => {
	document.querySelectorAll('.targetIcon').forEach((item) => {
		item.classList.toggle('change');
	})
})

 // smooth scrolling 
 $(document).ready(function(){
	$('a[href*="#"]').on('click',function(e){

		e.preventDefault();

		$('html, body').animate({

		scrollTop : $($(this).attr('href')).offset().top,

		},
		500,
		'linear'
		);

	});
});

// form validation

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkEntries();
});

function checkEntries() {
	//pull values from inputs
	//Add trim function to remove all the white space from the string
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(usernameValue === '') {
		//show error
		//add error class
		setFailFor(username, 'Username cannot be blank');
	} else {
		//add success class
		setPassFor(username);
	}
}

function setFailFor(input, message) {
	const formControl = input.parentElement; //form control
	const small = formControl.querySelector('small');

	//add error msg inside small
	small.innerText = message;

	//add error class
	formControl.className = 'formControl fail';

}