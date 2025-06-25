
const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navOpen.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ACTIVE SECTION LINK ============================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("#nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector("#nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);





/*===============values section ===============*/

const accordionItems = document.querySelectorAll(".values__accordion-item");

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector(".values__accordion-header");

	accordionHeader.addEventListener("click", () => {
		const openItem = document.querySelector(".accordion-open");

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

const toggleItem = (item) => {
	const accordionContent = item.querySelector(".values__accordion-content");

	if (item.classList.contains("accordion-open")) {
		accordionContent.removeAttribute("style");
		item.classList.remove("accordion-open");
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + "px";
		item.classList.add("accordion-open");
	}
};
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();

const readMoreBtn=document.querySelector(".read-more-btn");
const description=document.querySelector(".about__description");
readMoreBtn.addEventListener("click",(e)=>{
    description.classList.toggle("show-more");
    if(readMoreBtn.innerText === "READ MORE"){
        readMoreBtn.innerText = "READ LESS";
    }else{
        readMoreBtn.innerText = "READ MORE";
    }
});

/*===============Video section ===============*/
const videoFile = document.getElementById("video-file");
videoButton = document.getElementById("video-button");
videoIcon = document.getElementById("video-icon");

function playPause() {
    if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    } else {
        videoFile.pause();
        videoIcon.classList.add("ri-play-line");
        videoIcon.classList.remove("ri-pause-line");
    }
}
videoButton.addEventListener("click", playPause);

function finalVideo(){
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", finalVideo);

//programs
$('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

document.getElementById("year").textContent = new Date().getFullYear();


(function ($) {
    "use strict";
    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
})(jQuery);
