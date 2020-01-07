

/*
function createGallery(){
	var parentElement = document.getElementById('gallery_content')
	
	for (var i=1; i<=3; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="gallery/yogi'+i+'.jpg" onclick="galleryImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;

		parentElement.appendChild(photoDiv)
	}
}*/

function addHeaderFooter() {
	$("#header").load("header.html", function () {
		highlightCurrentPageLink()
	});
	$("#footer").load("footer.html");
}

function highlightCurrentPageLink() {
	var url = window.location.href;
	var urlArray = url.split('/')
	var currentPage = urlArray[urlArray.length - 1];

	//disable active for all links
	//$('.nav li').removeClass('active')

	//activate current page link
	switch (currentPage) {
		case 'index.html':
			$('#index').addClass('active')
			break;
		/*case 'about_us.html':
			$('#aboutUs').addClass('active')
			break;*/
		case 'events.html':
			$('#events').addClass('active')
			break;
		case 'gallery.html':
			$('#gallery').addClass('active')
			break;
		case 'achievements.html':
			$('#achievements').addClass('active')
			break;

		case 'courses.html':
			$('#courses').addClass('active')
			break;

		case 'contact_us.html':
			$('#contact_us').addClass('active')
			break
		default:
			break;
	}
}

function sendContactUsEmail() {
	var isValid = true;
	hideMessages()
	var message = document.getElementById('contactus_message').value
	var phone = document.getElementById('contactus_phone').value
	var email = document.getElementById('contactus_email').value
	var name = document.getElementById('contactus_name').value



	if (name == "" || !isValidName(name)) {
		isValid = false;
		$('#feedback_name').show()
	}
	if (email == "" || !isValidEmail(email)) {
		isValid = false;
		$('#feedback_email').show()
	}
	if (phone == "" || !isValidPhone(phone)) {
		isValid = false;
		$('#feedback_phone').show()
	}
	if (message == "") {
		isValid = false;
		$('#feedback_message').show()
	}
	if (isValid) {
		var content = document.getElementById('contactus_message').value + '<br>My Contact number is: ' + document.getElementById('contactus_phone').value + '<br>My email is: ' + document.getElementById("contactus_email").value;

		var template_params = {
			"reply_to": document.getElementById('contactus_email').value,
			"from_name": document.getElementById('contactus_name').value,
			"to_name": "Nalanda",
			"message_html": content
		}

		var service_id = "default_service";
		var template_id = "template_46xsecWm";
		emailjs.send(service_id, template_id, template_params);

		document.getElementById('contactus_message').value = ""
		document.getElementById('contactus_phone').value = ""
		document.getElementById('contactus_email').value = ""
		document.getElementById('contactus_name').value = ""

		/* alert("Thank you for reaching out to us!")*/
		$("#sendmessage").show();
		setTimeout(function () {
			$("#sendmessage").fadeOut(function () {
				$('#sendmessage').hide();
			})
		}, 3000);
	}
}

function hideMessages() {
	$('#feedback_name,#feedback_email,#feedback_phone,#feedback_message').hide()
}

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
function isValidPhone(phone) {
	var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (String(phone).match(regex)) {
		return true;
	}
	else {
		return false;
	}
}
function isValidName(name) {
	var regex = /^[a-zA-Z ]{2,30}$/;
	if (regex.test(name)) {
		return true;
	}
	else {
		return false;
	}
}


function hideEnquiryMessages() {
	$('#feedback_fname,#feedback_lname,#feedback_email,#feedback_phone,#feedback_course').hide()
}


function sendAdmissionEnquiryEmail() {
	var isValidAdmission = true;
	hideEnquiryMessages()

	var enquiry_firstname = document.getElementById("firstName").value;
	var enquiry_lastName = document.getElementById("lastName").value;
	var enquiry_phone = document.getElementById("phone").value;
	var enquiry_email = document.getElementById("email").value;
	var enquiry_level = document.getElementById("courseLevel").value;

	/*if (firstName == "" || lastName == "" || phone == "" || email == "" || level == "--") {
		alert("Plese fill in all details")
		return
	}*/


	if (enquiry_firstname == "" || !isValidName(enquiry_firstname)) {
	
		isValidAdmission = false;
		$('#feedback_fname').show()
	}
	if (enquiry_lastName == "" || !isValidName(enquiry_lastName)) {
		isValidAdmission = false;
		$('#feedback_lname').show()
	}
	if (enquiry_email == "" || !isValidEmail(enquiry_email)) {
		isValidAdmission = false;
		$('#feedback_email').show()
	}
	if (enquiry_phone == "" || !isValidPhone(enquiry_phone)) {
		isValidAdmission = false;
		$('#feedback_phone').show()
	}
	if (enquiry_level == "--") {
		isValidAdmission = false;
		$('#feedback_course').show()
	}
	if (isValidAdmission) {
		var fullname = enquiry_firstname + " " + enquiry_lastName;

		var template_params = {
			"email": enquiry_email,
			"full_name": fullname,
			"mobile": enquiry_phone,
			"course": enquiry_level
		 }
		 
		 var service_id = "default_service";
		 var template_id = "admissionenquiry";
		 emailjs.send(service_id, template_id, template_params);

		document.getElementById('firstName').value = ""
		document.getElementById('lastName').value = ""
		document.getElementById('phone').value = ""
		document.getElementById('email').value = ""
		document.getElementById('courseLevel').value = "--"

		/* alert("Thank you for reaching out to us!")*/
		$("#sendmessage").show();
		setTimeout(function () {
			$("#sendmessage").fadeOut(function () {
				$('#sendmessage').hide();
			})
		}, 3000);
	
/*	else {
		var fullname = firstName + " " + lastName;

		var template_params = {
			"reply_to": email,
			"from_name": firstName,
			"to_name": "Nalanda",
			"fullName": fullname,
			"phone": phone,
			"level": level
		}

		var service_id = "default_service";
		var template_id = "admission";
		emailjs.send(service_id, template_id, template_params);

		document.getElementById('firstName').value = ""
		document.getElementById('lastName').value = ""
		document.getElementById('phone').value = ""
		document.getElementById('email').value = ""
		document.getElementById('courseLevel').value = "--"

		//alert("Thank you for your interest in admission. We will reach out to you soon.")
		$("#sendmessage").show();
		setTimeout(function () {
			$("#sendmessage").fadeOut(function () {
				$('#sendmessage').hide();
			})
		}, 3000);
	}*/
}
}

function createGallery() {
	var container = $('#isotope-items');
	var html = "";
	var photoCaptionForNalanda = "";
	var photoCaptionForStany = "";
	var photoCaptionForKishan = ""
	/* Images for nalanda */
	for (i = 2; i <= 21; i++) {
		html += '<li class="span3 isotope-element isotope-filter1"><div class="thumb-isotope"><div class="thumbnail clearfix"><a href="images/gallery/nalanda/n' + i + '.jpg" height="370px" width="375px">'
		html += '<figure><img src="images/gallery/nalanda/n' + i + '.jpg" height="270px" width="275px" alt=""><em></em></figure><div class="caption">' + photoCaptionForNalanda + '</div></a></div></div></li>'
	}
	/* Images for stany */
	for (i = 1; i <= 7; i++) {
		html += '<li class="span3 isotope-element isotope-filter2"><div class="thumb-isotope"><div class="thumbnail clearfix"><a href="images/gallery/stany/s' + i + '.jpg" height="370px" width="375px">'
		html += '<figure><img src="images/gallery/stany/s' + i + '.jpg" height="270px" width="275px" alt=""><em></em></figure><div class="caption">' + photoCaptionForStany + '</div></a></div></div></li>'
	}
	/* Images for kishan */
	for (i = 1; i <= 7; i++) {
		html += '<li class="span3 isotope-element isotope-filter3"><div class="thumb-isotope"><div class="thumbnail clearfix"><a href="images/gallery/kishan/k' + i + '.jpg" height="370px" width="375px">'
		html += '<figure><img src="images/gallery/kishan/k' + i + '.jpg" height="270px" width="275px" alt=""><em></em></figure><div class="caption">' + photoCaptionForKishan + '</div></a></div></div></li>'
	}
	document.getElementById('isotope-items').innerHTML = html
	initGalleryLibrary()
}

function initGalleryLibrary() {
	// isotop
	var $container = $('#isotope-items'),
		$optionSet = $('#isotope-options'),
		$optionSets = $('#isotope-filters'),
		$optionLinks = $optionSets.find('a');
	$container.isotope({
		filter: '*',
		layoutMode: 'fitRows'
	});
	$optionLinks.click(function () {
		var $this = $(this);
		// don't proceed if already selected 
		if ($this.hasClass('selected')) {
			return false;
		}
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});
		return false;
	});
	$(window).on("resize", function (event) {
		$container.isotope('reLayout');
	});

	setTimeout(function () {
		$container.isotope('reLayout');
	}, 1000)


	// touchTouch
	$('.thumb-isotope .thumbnail a').touchTouch();
}






