
// code by @itz_pa1 :)[github]



function w() {
    var number = document.getElementById('number').value;
    var x = document.getElementById('Ncode');
    var y = x.options[x.selectedIndex].value;
    // alert(y)
    window.location.href = 'https://wa.me/' + y + number;
}

// ---------loading-scrn---------

var load;

function loading() {
    load = setTimeout(show, 2000);
}

function show() {
    document.getElementById('load').style.display = "none";
    document.getElementById('wrapper').style.display = "block";
}

function age() {
    document.getElementById('logo').src = "media/age.png";
    document.getElementById('title').innerHTML = 'Age Calculator';
    document.querySelector('.copyrights').style.display = "none";
    document.querySelector('.copyrights-1').style.display = "block";
    document.querySelector('.container').style.display = "none";
    document.querySelector('.age-container').style.display = "block";
}


function DM() {
    document.getElementById('logo').style.background = "media/whatsapp.svg";
    document.getElementById('title').innerHTML = "WhatsDM";
    document.querySelector('.copyrights').style.display = "block";
    document.querySelector('.copyrights-1').style.display = "none";
    document.querySelector('.container').style.display = "block";
    document.querySelector('.age-container').style.display = "none";
}

// ------------------------getting dates value-----------------

function calculate() {
    var dob = new Date(document.getElementById('date').value);
    var dob_year = dob.getFullYear();
    var dob_month = dob.getMonth();
    var dob_date = dob.getDate();

    var curr = new Date(document.getElementById('currdate').value);
    // var curr = new Date();
    var curr_year = curr.getFullYear();
    var curr_month = curr.getMonth();
    var curr_date = curr.getDate();

    var y = curr_year - dob_year;
    var m = curr_month - dob_month;
    var d = curr_date - dob_date;

    // -------born condition check----------


    // --------------------calculation of age-----------------

    document.getElementById('y').innerText = y;
    document.getElementById('m').innerText = m;
    document.getElementById('d').innerText = d;

    document.getElementById('total-age').style.opacity = "1";
    if (y<0, m<0, d<0) {
        document.getElementById('total-age').innerText = "Not born yet! Choose correct current date.";
    }
    
    // if (y<0) {
    //         document.getElementById('total-age').innerText = "Not born yet! select correct year.";
    //     }
    //     else if (m<0) {
    //         document.getElementById('total-age').innerText = "Not born yet! select correct month.";
    //     }
    //     else {
    //         document.getElementById('total-age').innerText = "Not born yet! select correct date.";
    //         curr = new Date('');
    //     }
}