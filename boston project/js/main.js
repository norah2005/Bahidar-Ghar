const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});



//booking//
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  let isValid = true;

  // Name validation
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');
  if (name.trim() === '') {
      nameError.style.display = 'block';
      isValid = false;
  } else {
      nameError.style.display = 'none';
  }

  // Email validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      emailError.style.display = 'block';
      isValid = false;
  } else {
      emailError.style.display = 'none';
  }

  // Phone number validation
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^[0-9]{10}$/; // Simple pattern for 10 digit phone number
  if (!phonePattern.test(phone)) {
      phoneError.style.display = 'block';
      isValid = false;
  } else {
      phoneError.style.display = 'none';
  }

  // Date validation
  const date = document.getElementById('date').value;
  const dateError = document.getElementById('dateError');
  if (date.trim() === '') {
      dateError.style.display = 'block';
      isValid = false;
  } else {
      dateError.style.display = 'none';
  }

  // If all fields are valid, submit the form
  if (isValid) {
      alert('Booking submitted successfully!');
      this.submit();
  }
});


 