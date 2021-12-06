window.addEventListener('DOMContentLoaded', function () {
    "user strict";
    const newYear = new Date('jan 1 2022 00:00:00');

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
    // console.log(days);

    timeCount();
    setInterval(timeCount, 1000);


    new WOW().init();

});


