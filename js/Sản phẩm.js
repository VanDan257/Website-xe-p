window.onscroll = function() { myFunction() };

var header = document.getElementById("main-header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}

var activeColor = document.querySelectorAll('.item-color-product')

function changActiveColor(element) {
    for (i = 0; i < activeColor.length; i++) {
        activeColor[i].classList.remove('active-color')
    }
    element.classList.add('active-color')
}

function changActiveDetails(type, element) {
    let changeDetails = document.querySelectorAll('.list-detail li');

    for (i = 0; i < changeDetails.length; i++) {
        changeDetails[i].classList.remove('active-details')
    }
    element.classList.add('active-details')
    document.getElementsByClassName('content-detail').style.display = 'none'
    document.getElementsByClassName('content-parameter').style.display = 'none'
    document.getElementsByClassName('arrange-comment').style.display = 'none'

    document.getElementsByClassName(type).style.display = 'block'
}