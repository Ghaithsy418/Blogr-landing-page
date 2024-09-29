'use strict';

const navigation = document.querySelector("nav");
const productLabel = document.querySelector(".product-label");
const companyLabel = document.querySelector(".company-label");
const connectLabel = document.querySelector(".connect-label");
const label = document.querySelectorAll(".label");
const header = document.querySelector("header");
const arrows = document.querySelectorAll(".arrow");
const menuArrows = document.querySelectorAll(".arrow-menu");
const allSections = document.querySelectorAll(".all-sections");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const productLabelMenu = document.querySelector(".product-label-menu");
const companyLabelMenu = document.querySelector(".company-label-menu");
const connectLabelMenu = document.querySelector(".connect-label-menu");
//######################################################


navigation.addEventListener("mouseover",function(e){
    if(e.target.classList.contains("product-link")) {
        productLabel.classList.remove("hidden-label");
        e.target.firstElementChild.classList.add("rotate");
    }  

    if(e.target.classList.contains("company-link")) {
        companyLabel.classList.remove("hidden-label");
        e.target.firstElementChild.classList.add("rotate");
    } 
    
    if(e.target.classList.contains("connect-link")) {
        connectLabel.classList.remove("hidden-label");
        e.target.firstElementChild.classList.add("rotate");
    }
})

const navHeight = navigation.getBoundingClientRect().height;

navigation.addEventListener("mouseout",function(e){
    if(e.target.classList.contains("left-nav")) {
        label.forEach((element) => element.classList.add("hidden-label"));
        arrows.forEach((arrow) => arrow.classList.remove("rotate"));
    }
})

const stickyNav = function(entries){
    const [entry] = entries;

    if(!entry.isIntersecting) {
       navigation.classList.add("sticky");
       label.forEach((element) => {
           element.classList.add("shadow");
       });
    }
    else {
        navigation.classList.remove("sticky");
        label.forEach((element) => element.classList.remove("shadow"));
    } 
}


const headerObserver = new IntersectionObserver(stickyNav,{
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
})

headerObserver.observe(header);

//###################################################################3

const revealSection = function(entries,observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove("hidden-section");
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold: 0.15,
})



allSections.forEach((section)=>{
    sectionObserver.observe(section);
    section.classList.add("hidden-section");
})

hamburger.addEventListener("click",function(){
    mobileMenu.classList.add("mobile-menu-active");
    overlay.classList.add("overlay-active");
    hamburger.style.display = "none";
    closeBtn.classList.add("close-btn-active");
});

closeBtn.addEventListener("click",function(){
    mobileMenu.classList.remove("mobile-menu-active");
    overlay.classList.remove("overlay-active");
    hamburger.style.display = "block";
    closeBtn.classList.remove("close-btn-active");
})

mobileMenu.addEventListener("mouseover",function(e){
    if(e.target.classList.contains("product-link")) {
        productLabelMenu.classList.remove("hidden-label");
        e.target.firstElementChild.classList.add("rotate");
    }  

    if(e.target.classList.contains("company-link")) {
        companyLabelMenu.classList.remove("hidden-label");
        e.target.firstElementChild.classList.add("rotate");
    } 
    
    if(e.target.classList.contains("connect-link")) {
        connectLabelMenu.classList.remove("hidden-label");
        e.target.firstElementChild.classList.add("rotate");
    }
});

mobileMenu.addEventListener("mouseout",function(e){
    if(e.target.classList.contains("left-nav")){
        label.forEach((element) => element.classList.add("hidden-label"));
        menuArrows.forEach((arrow) => arrow.classList.remove("rotate"));
    }
})