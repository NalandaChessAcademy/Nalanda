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
	$("#header").load("header.html", function(){
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
	switch(currentPage) {
		case 'index.html' :
			$('#index').addClass('active')
			break;
		/*case 'about_us.html':
			$('#aboutUs').addClass('active')
			break;*/
		case 'events.html':
			$('#events').addClass('active')
			break;
		case 'gallery.html' :
			$('#gallery').addClass('active')
			break;
		case 'achievements.html' :
			$('#achievements').addClass('active')
			break;
		
		case 'courses.html' :
			$('#courses').addClass('active')
			break;
		
		case 'contact_us.html' :
			$('#contact_us').addClass('active')
			break
		default:
			break;
	}
}

function sendContactUsEmail() {

	var message = document.getElementById('contactus_message').value
	var phone = document.getElementById('contactus_phone').value
	var email = document.getElementById('contactus_email').value
	var name =  document.getElementById('contactus_name').value

	if (message == "" || phone == "" || email == "" || name == "") {
		alert("Please fill in all details.")
		return
	} else {
		var content = document.getElementById('contactus_message').value+'<br>My Contact number is: '+document.getElementById('contactus_phone').value+'<br>My email is: '+ document.getElementById("contactus_email").value;

		  var template_params = {
		     "reply_to": document.getElementById('contactus_email').value,
		     "from_name": document.getElementById('contactus_name').value,
		     "to_name": "Nalanda",
		     "message_html": content
		  }

		  var service_id = "default_service";
		  var template_id = "template_fWShdOdX";
		  emailjs.send(service_id, template_id, template_params);

		  document.getElementById('contactus_message').value = ""
		  document.getElementById('contactus_phone').value = ""
		  document.getElementById('contactus_email').value = ""
		  document.getElementById('contactus_name').value = ""

		  alert("Thank you for reaching out to us!")
	}
}

function sendAdmissionEnquiryEmail() {

	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var level = document.getElementById("courseLevel").value;

	if (firstName == "" || lastName == "" || phone == "" || email == "" || level == "--") {
		alert("Plese fill in all details")
		return
	}
	else {
		var fullname = firstName+" "+lastName;
		
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

		alert("Thank you for your interest in admission. We will reach out to you soon.")
	}
}

function createGallery() {
	var container = $('#isotope-items');
	var html = "";
	var photoCaptionForNalanda = "";
	var photoCaptionForStany = "";
	var photoCaptionForKishan = ""
	/* Images for nalanda */
	for (i=2; i<=28; i++){
		html+= '<li class="span3 isotope-element isotope-filter1"><div class="thumb-isotope"><div class="thumbnail clearfix"><a href="images/gallery/nalanda/n'+i+'.jpg" height="370px" width="375px">'
		html+= '<figure><img src="images/gallery/nalanda/n'+i+'.jpg" height="270px" width="275px" alt=""><em></em></figure><div class="caption">'+photoCaptionForNalanda+'</div></a></div></div></li>'
	}
	/* Images for stany */
	for (i=1; i<=10; i++){
		html+= '<li class="span3 isotope-element isotope-filter2"><div class="thumb-isotope"><div class="thumbnail clearfix"><a href="images/gallery/nalanda/s'+i+'.jpg" height="370px" width="375px">'
		html+= '<figure><img src="images/gallery/stany/s'+i+'.jpg" height="270px" width="275px" alt=""><em></em></figure><div class="caption">'+photoCaptionForStany+'</div></a></div></div></li>'
	}
	/* Images for kishan */
	for (i=1; i<=4; i++){
		html+= '<li class="span3 isotope-element isotope-filter3"><div class="thumb-isotope"><div class="thumbnail clearfix"><a href="images/gallery/nalanda/k'+i+'.jpg" height="370px" width="375px">'
		html+= '<figure><img src="images/gallery/kishan/k'+i+'.jpg" height="270px" width="275px" alt=""><em></em></figure><div class="caption">'+photoCaptionForKishan+'</div></a></div></div></li>'
	}
	document.getElementById('isotope-items').innerHTML = html
	initGalleryLibrary()
}

function initGalleryLibrary(){
	// isotop
	var $container = $('#isotope-items'),
		$optionSet = $('#isotope-options'), 
	    $optionSets = $('#isotope-filters'), 
	    $optionLinks = $optionSets.find('a'); 
    $container.isotope({ 
        filter: '*',
        layoutMode: 'fitRows'
    });  
   	$optionLinks.click(function(){ 
   		var $this = $(this); 
    	// don't proceed if already selected 
		if ( $this.hasClass('selected') ) { 
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
	$(window).on("resize", function( event ) {	
		$container.isotope('reLayout');		
	});	

	setTimeout(function(){
		$container.isotope('reLayout');	
	},1000)
	

	// touchTouch
	$('.thumb-isotope .thumbnail a').touchTouch();
}

