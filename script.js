let deadline = '09-03-2022';
function getTime(endtime) {
    let time = Date.parse(deadline) - Date.parse(new Date());
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor(time / (1000 * 60 * 60)) % 24;
    let days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
        'total': time,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'days': days,
    };
}

function sedTime(id, endtime) {
    let timer = document.getElementById(id);
    let seconds = timer.querySelector('.seconds');
    let minutes = timer.querySelector('.minutes');
    let hours = timer.querySelector('.hours');
    let days = timer.querySelector('.days');
    let timeInterval = setInterval(updateTime, 1000);
    function updateTime() {
        let time = getTime(endtime);
        seconds.textContent = `${time.seconds}`;
        minutes.textContent = `${time.minutes}`;
        hours.textContent = `${time.hours}`;
        days.textContent = `${time.days}`;

        if (time.total <= 0) {
            clearInterval(timeInterval);
        }
    }

}
sedTime('timer', deadline);

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItem = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let activeBtn = btn;
        console.log(activeBtn);
        let tabId = activeBtn.getAttribute("data-tab");
        console.log(tabId)

        let activeTab = document.querySelector(tabId)

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('active');
        })

        tabsItem.forEach(function (item) {
            item.classList.remove('active');
        })
        activeBtn.classList.add('active');
        activeTab.classList.add('active');

    })
})
const tabsBtn2 = document.querySelectorAll(".tabs__nav-btn-second");
const tabsItem2 = document.querySelectorAll(".tabs__item-second");
tabsBtn2.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let activeBtn = btn;
        console.log(activeBtn);
        let tabId = activeBtn.getAttribute("data-tab");
        console.log(tabId)

        let activeTab = document.querySelector(tabId)

        tabsBtn2.forEach(function (btn) {
            btn.classList.remove('active');
        })

        tabsItem2.forEach(function (item) {
            item.classList.remove('active');
        })
        activeBtn.classList.add('active');
        activeTab.classList.add('active');

    })
})

const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.open-btn');
const popupClose = document.querySelector('.close-popup');

popupOpen.addEventListener('click', function () {
    popupBg.classList.add('active');
    popup.classList.add('active');
})


popupClose.addEventListener('click', function () {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})

document.addEventListener('click', (event) => {
    if (event.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
})