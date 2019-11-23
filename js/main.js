$(document).ready(function() {
    $(".disappear").on('click', function() {

        $(".disappear").addClass('none');

        $(this).removeClass('none');

        $("#section").removeClass('section');

        $(".disappear").removeClass('animation');

        $("#sectionHide").removeClass('sectionHide');

        $("#titleDIV").addClass('move');

        $("#vertical").css('margin-top', '-42px');

        $("#myDIV").addClass('myStyle').removeClass('dsi');

        $(".h3").addClass('titreSecond').removeClass('h3Special');

        $("#verticalHide").removeClass('verticalHide').css('margin-top', '-40px');

        $(".h3").removeClass('animation').css('margin-top', '-50px');

        $(".work").addClass('change').removeClass('work');

        $(".name").addClass('transformation').removeClass('name');

    });
});




function mOver() {

    const cercle = document.getElementById("myDIV");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");


    if (cercle.classList.contains("myStyle")) { //Animation des pastilles au survol de DSI

        document.getElementById("one").style.display = "block";
        one.classList.add("slide");
        one.classList.remove("slideOut");

        document.getElementById("two").style.display = "block";
        two.classList.add("slideTwo");
        two.classList.remove("slideOutTwo");

        document.getElementById("three").style.display = "block";
        three.classList.add("slideThree");
        three.classList.remove("slideOutThree");

        document.getElementById("four").style.display = "block";
        four.classList.add("slideFour");
        four.classList.remove("slideOutFour");

        document.getElementById("five").style.display = "block";
        five.classList.add("slideFive");
        five.classList.remove("slideOutFive");

        document.getElementById("six").style.display = "block";
        six.classList.add("slideSix");
        six.classList.remove("slideOutSix");

        document.getElementById("opacityWork").style.opacity = "0.15"; //Floutage sur le reste de la page
        document.getElementById("opacityName").style.opacity = "0.15";
        document.getElementById("sectionHide").style.opacity = "0.15";
        document.getElementById("opacityDg").style.opacity = "0.15";
        document.getElementById("opacityVertical").style.opacity = "0.15";

    }
}

function mOut() {

    const cercle = document.getElementById("myDIV");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");

    if (cercle.classList.contains("myStyle")) { //Fin d'animation des pastilles au survol de DSI

        one.classList.add("slideOut");
        one.classList.remove("slide");

        two.classList.add("slideOutTwo");
        two.classList.remove("slideTwo");

        three.classList.add("slideOutThree");
        three.classList.remove("slideThree");

        four.classList.add("slideOutFour");
        four.classList.remove("slideFour");

        five.classList.add("slideOutFive");
        five.classList.remove("slideFive");

        six.classList.add("slideOutSix");
        six.classList.remove("slideSix");

        document.getElementById("opacityWork").style.opacity = "1"; //Fin du floutage
        document.getElementById("opacityName").style.opacity = "1";
        document.getElementById("sectionHide").style.opacity = "1";
        document.getElementById("opacityDg").style.opacity = "1";
        document.getElementById("opacityVertical").style.opacity = "1";


    }
}