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


var list = document.getElementsByClassName("slide-img");
var index = 0;

function Init() {
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }
        list[index].style.display = 'block';
        list[index].style.animation = 'fadeIn 1s ease-in-out'
    }
}

function showL() {
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }

        if (index < list.length - 1)
            index = index + 1;
        else index = 0;
        list[index].style.display = 'block';
        list[index].style.animation = 'fadeIn 1s ease-in-out'

    }
}

function showR() {
    if (list && list.length > 0) {
        for (let x of list) {
            x.style.display = 'none';
        }

        if (index > 0)
            index = index - 1;
        else index = list.length - 1;
        list[index].style.display = 'block';
        list[index].style.animation = 'fadeIn 1s ease-in-out'

    }
}
Init();
setTimeout(showL, 6000);

function changeProductList(type, element) {
    let changeMenu = document.querySelectorAll('.product-bike');
    if (element == changeMenu[0] || element == changeMenu[1] || element == changeMenu[2] || element == changeMenu[3]) {

        for (i = 0; i < changeMenu.length; i++) {
            changeMenu[i].classList.remove('active')
        }
        element.classList.add('active')

        document.getElementById(type).style.display = 'flex'
        switch (type) {
            case 'bike-road':
                {
                    document.getElementById('bike-mtb').style.display = 'none'
                    document.getElementById('bike-fixedgear').style.display = 'none'
                    document.getElementById('bike-child').style.display = 'none'
                    break
                }
            case 'bike-mtb':
                {
                    document.getElementById('bike-road').style.display = 'none'
                    document.getElementById('bike-fixedgear').style.display = 'none'
                    document.getElementById('bike-child').style.display = 'none'
                    break
                }
            case 'bike-fixedgear':
                {
                    document.getElementById('bike-road').style.display = 'none'
                    document.getElementById('bike-mtb').style.display = 'none'
                    document.getElementById('bike-child').style.display = 'none'
                    break
                }
            case 'bike-child':
                {
                    document.getElementById('bike-road').style.display = 'none'
                    document.getElementById('bike-mtb').style.display = 'none'
                    document.getElementById('bike-fixedgear').style.display = 'none'
                    break
                }
        }
    }
}

function changeProductList2(type, element) {
    let changeMenu2 = document.querySelectorAll('.products-accessary');
    if (element == changeMenu2[0] || element == changeMenu2[1] || element == changeMenu2[2] || element == changeMenu2[3]) {

        for (i = 0; i < changeMenu2.length; i++) {
            changeMenu2[i].classList.remove('active')
        }
        element.classList.add('active')

        document.getElementById(type).style.display = 'flex'
        switch (type) {
            case 'accessary-road':
                {
                    document.getElementById('accessary-mtb').style.display = 'none'
                    document.getElementById('accessary-fixedgear').style.display = 'none'
                    document.getElementById('accessary-child').style.display = 'none'
                    break
                }
            case 'accessary-mtb':
                {
                    document.getElementById('accessary-road').style.display = 'none'
                    document.getElementById('accessary-fixedgear').style.display = 'none'
                    document.getElementById('accessary-child').style.display = 'none'
                    break
                }
            case 'accessary-fixedgear':
                {
                    document.getElementById('accessary-road').style.display = 'none'
                    document.getElementById('accessary-mtb').style.display = 'none'
                    document.getElementById('accessary-child').style.display = 'none'
                    break
                }
            case 'accessary-child':
                {
                    document.getElementById('accessary-road').style.display = 'none'
                    document.getElementById('accessary-mtb').style.display = 'none'
                    document.getElementById('accessary-fixedgear').style.display = 'none'
                    break
                }
        }
    }

}

function changeProductList3(type, element) {
    let changeMenu3 = document.querySelectorAll('.products-accessory');
    if (element == changeMenu3[0] || element == changeMenu3[1] || element == changeMenu3[2] || element == changeMenu3[3]) {

        for (i = 0; i < changeMenu3.length; i++) {
            changeMenu3[i].classList.remove('active')
        }
        element.classList.add('active')

        document.getElementById(type).style.display = 'flex'
        switch (type) {
            case 'accessory-road':
                {
                    document.getElementById('accessory-mtb').style.display = 'none'
                    document.getElementById('accessory-fixedgear').style.display = 'none'
                    document.getElementById('accessory-child').style.display = 'none'
                    break
                }
            case 'accessory-mtb':
                {
                    document.getElementById('accessory-road').style.display = 'none'
                    document.getElementById('accessory-fixedgear').style.display = 'none'
                    document.getElementById('accessory-child').style.display = 'none'
                    break
                }
            case 'accessory-fixedgear':
                {
                    document.getElementById('accessory-road').style.display = 'none'
                    document.getElementById('accessory-mtb').style.display = 'none'
                    document.getElementById('accessory-child').style.display = 'none'
                    break
                }
            case 'accessory-child':
                {
                    document.getElementById('accessory-road').style.display = 'none'
                    document.getElementById('accessory-mtb').style.display = 'none'
                    document.getElementById('accessory-fixedgear').style.display = 'none'
                    break
                }
        }
    }

}

function changeProductList4(type, element) {
    let changeMenu4 = document.querySelectorAll('.products-groupset');
    if (element == changeMenu4[0] || element == changeMenu4[1] || element == changeMenu4[2] || element == changeMenu4[3]) {

        for (i = 0; i < changeMenu4.length; i++) {
            changeMenu4[i].classList.remove('active')
        }
        element.classList.add('active')

        document.getElementById(type).style.display = 'flex'
        switch (type) {
            case 'groupset-road':
                {
                    document.getElementById('groupset-mtb').style.display = 'none'
                    document.getElementById('groupset-fixedgear').style.display = 'none'
                    document.getElementById('groupset-child').style.display = 'none'
                    break
                }
            case 'groupset-mtb':
                {
                    document.getElementById('groupset-road').style.display = 'none'
                    document.getElementById('groupset-fixedgear').style.display = 'none'
                    document.getElementById('groupset-child').style.display = 'none'
                    break
                }
            case 'groupset-fixedgear':
                {
                    document.getElementById('groupset-road').style.display = 'none'
                    document.getElementById('groupset-mtb').style.display = 'none'
                    document.getElementById('groupset-child').style.display = 'none'
                    break
                }
            case 'groupset-child':
                {
                    document.getElementById('groupset-road').style.display = 'none'
                    document.getElementById('groupset-mtb').style.display = 'none'
                    document.getElementById('groupset-fixedgear').style.display = 'none'
                    break
                }
        }
    }

}

function changeProductList5(type, element) {
    let changeMenu5 = document.querySelectorAll('.products-frame');
    if (element == changeMenu5[0] || element == changeMenu5[1] || element == changeMenu5[2]) {

        for (i = 0; i < changeMenu5.length; i++) {
            changeMenu5[i].classList.remove('active')
        }
        element.classList.add('active')

        document.getElementById(type).style.display = 'flex'
        switch (type) {
            case 'frame-road':
                {
                    document.getElementById('frame-mtb').style.display = 'none'
                    document.getElementById('frame-fixedgear').style.display = 'none'
                    document.getElementById('frame-child').style.display = 'none'
                    break
                }
            case 'frame-mtb':
                {
                    document.getElementById('frame-road').style.display = 'none'
                    document.getElementById('frame-fixedgear').style.display = 'none'
                    document.getElementById('frame-child').style.display = 'none'
                    break
                }
            case 'frame-fixedgear':
                {
                    document.getElementById('frame-road').style.display = 'none'
                    document.getElementById('frame-mtb').style.display = 'none'
                    document.getElementById('frame-child').style.display = 'none'
                    break
                }
        }
    }

}