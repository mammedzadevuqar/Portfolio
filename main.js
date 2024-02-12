var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);
document.querySelector(".ml11 .letters").innerHTML +=
  "<span class='letter'>.</span>";

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        16,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".welcome-word, .main-word", { origin: "top" });
ScrollReveal().reveal(
  ".portfolio-row, .aboutme-container, .portfolio-box,.blogy1, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".mainimage,.blogy, .welcome ", { origin: "left" });
ScrollReveal().reveal(".footer, .blogy2, .about-content ", {
  origin: "right",
});

const resumeBtn = document.querySelector(".resume-btn");
const skillBtn = document.querySelector(".skill-btn");
const testimonialWrapper = document.querySelector(".testimonial-wrapper");
const skillWrapper = document.querySelector(".skill-wrapper");

resumeBtn.addEventListener("click", function () {
  testimonialWrapper.style.display = "block";
  skillWrapper.style.display = "none";
  resumeBtn.style.color = "red";
  skillBtn.style.color = "white";
});
skillBtn.addEventListener("click", function () {
  testimonialWrapper.style.display = "none";
  skillWrapper.style.display = "block";
  skillBtn.style.color = "red";
  resumeBtn.style.color = "white";
});

const sendMessage = (e) => {
  e.preventDefault();
  emailjs
    .send("service_nhx3ijb", "template_gvp0yzj", {
      from_name: document.querySelector("#fullName").value,
      phone_number: document.querySelector("#number").value,
      message: document.querySelector("#message").value,
      email: document.querySelector("#email").value,
    })
    .then(() => alert("sended message!"));
  document.querySelector("#fullName").value = "";
  document.querySelector("#message").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#number").value = "";
};

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back,Boss :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

