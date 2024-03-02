
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
//  function ober_toggle(param){
//        $(param).toggle( "slow" );
// }
 function ober_show(param){
       $(param).show( "slow" );
}

  $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.cta').fadeIn();
  } else {
    $('.cta').fadeOut();
  }
});

$('h4').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    $('html,body').animate({scrollTop: 0}, 800);
    // $('html,body').animate({scrollTop: aTag.offset().top}, 800);
    return false;
});
window.scroll({
  top: 1, 
  left: 0, 
  behavior: 'smooth'
});
window.scrollBy({ 
  top: 25, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
