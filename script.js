
//SCROLLING TO CONTENT
function scrollToAbout(){
  var aboutSection = document.getElementById("about");
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}


function scrollToContact() {
  var contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: 'smooth' });
}


//SCROLLING CONTENT END
function openTab(tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    // Deactivate all tab links
    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active-link");
    }
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
    // Activate the selected tab link
    event.currentTarget.classList.add("active-link");
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var scrollToTopButton = document.getElementById('scrollToTop');

    // Smooth scroll function
    function scrollToTop() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listener to the button
    scrollToTopButton.addEventListener('click', scrollToTop);
}); 