window.addEventListener('DOMContentLoaded', function () {
    "user strict";



    const newYear = new Date('jan 20 2022 00:00:00');

    const daysVal = document.querySelector('.days .header__namber_val');
    const hoursVal = document.querySelector('.hours .header__namber_val');
    const minutesVal = document.querySelector('.minutes .header__namber_val');
    const secondsVal = document.querySelector('.seconds .header__namber_val');


    const daysText = document.querySelector('.days .header__namber_text');
    const hoursText = document.querySelector('.hours .header__namber_text');
    const minutesText = document.querySelector('.minutes .header__namber_text');
    const secondsText = document.querySelector('.seconds .header__namber_text');


    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now; // осталось до

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24); // получаем секунды / минуты / часы / дни;
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24; //деление по модулю
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    };
    timeCount();
    setInterval(timeCount, 1000);




    // ! Modal
    const openKab = document.querySelectorAll('.openKab');
    const modelclose = document.querySelectorAll('.modalKab__close');
    const modalKab = document.querySelector('.modalKab');
    const registr = document.querySelector('.modalKab__link');
    const wrapper = document.querySelector('.modalKab__wrapper');
    const regBlock = document.querySelector('.modalKab__registr');
    const overlay = document.querySelector('.overlay');
    const curseBtn = document.querySelectorAll('.curseBtn');
    const curse = document.querySelector('.curse');


    registr.addEventListener('click', () => {
        bodys.setAttribute("style", "overflow:hidden;");
        wrapper.setAttribute("style", "display:none;");
        regBlock.setAttribute("style", "display:block;");
    });

    for (let i = 0; i < curseBtn.length; i++) {
        curseBtn[i].addEventListener('click', function () {
            bodys.setAttribute("style", "overflow:hidden;");
            overlay.setAttribute("style", "display:block;");
            curse.classList.add('active');
            menu.classList.remove('active');
        });
    }

    for (let i = 0; i < openKab.length; i++) {
        openKab[i].addEventListener('click', function () {
            bodys.setAttribute("style", "overflow:hidden;");
            overlay.setAttribute("style", "display:block;");
            modalKab.classList.add('active');
            menu.classList.remove('active');

        });
    }

    for (let i = 0; i < modelclose.length; i++) {
        modelclose[i].addEventListener('click', function () {
            bodys.setAttribute("style", "overflow:none;");
            regBlock.setAttribute("style", "display:none;");
            wrapper.setAttribute("style", "display:block;");
            overlay.setAttribute("style", "display:none;");
            modalKab.classList.remove('active');
            curse.classList.remove('active');
        });
    }














    // ! работа с hamburger
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.menu__close');
    const bodys = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        bodys.setAttribute("style", "overflow:hidden;");
        menu.classList.add('active');
    });
    close.addEventListener('click', () => {
        bodys.setAttribute("style", "overflow:none;");
        menu.classList.remove('active');
    });



    // ! библеотека анимаций
    new WOW().init();

});


