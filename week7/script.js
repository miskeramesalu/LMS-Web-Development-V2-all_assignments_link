// Global scope variables
const CONFETTI_COLORS = ["#FF9E1B", "#2D5B2A", "#E13C2D", "#FFFFFF"];
let badgesEarned = 0; // Global variable to track badges

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", function () {
  // Create animated particles in background
  createParticles(15);

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  // Function with parameter and return value
  function toggleMenu(menuElement) {
    menuElement.classList.toggle("show");
    return menuElement.classList.contains("show");
  }

  mobileMenuBtn.addEventListener("click", function () {
    const isMenuOpen = toggleMenu(navMenu); // Using function with parameter and return value
    console.log("Menu is open:", isMenuOpen); // Demonstrating return value usage

    // Animate hamburger icon
    const spans = mobileMenuBtn.querySelectorAll("span");
    if (isMenuOpen) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Form validation functionality
  const form = document.getElementById("registration-form");

  // Input elements
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const countryInput = document.getElementById("country");
  const emailInput = document.getElementById("email");
  const interestsInputs = document.querySelectorAll('input[name="interests"]');

  // Error elements
  const nameError = document.getElementById("name-error");
  const ageError = document.getElementById("age-error");
  const countryError = document.getElementById("country-error");
  const emailError = document.getElementById("email-error");
  const interestsError = document.getElementById("interests-error");
  const successMessage = document.getElementById("form-success");

  // Function demonstrating scope and return values
  function validateName(nameValue) {
    // Local scope variable
    const minLength = 2;

    if (nameValue.trim().length < minLength) {
      return {
        isValid: false,
        message: `Please enter your name (min ${minLength} characters)`,
      };
    } else {
      return { isValid: true, message: "" };
    }
  }

  // Function with parameter and return value
  function validateAge(ageValue) {
    const age = parseInt(ageValue);
    if (isNaN(age) || age < 5 || age > 18) {
      return { isValid: false, message: "Please enter a valid age (5-18)" };
    } else {
      return { isValid: true, message: "" };
    }
  }

  // Function demonstrating parameter usage
  function validateCountry(countryValue) {
    if (countryValue === "") {
      return { isValid: false, message: "Please select your country" };
    } else {
      return { isValid: true, message: "" };
    }
  }

  // Function with parameter and return value
  function validateEmail(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      return { isValid: false, message: "Please enter a valid email address" };
    } else {
      return { isValid: true, message: "" };
    }
  }

  // Function demonstrating parameter (NodeList) and return value
  function validateInterests(interestsNodes) {
    let checked = false;
    interestsNodes.forEach((input) => {
      if (input.checked) checked = true;
    });

    if (!checked) {
      return { isValid: false, message: "Please select at least one interest" };
    } else {
      return { isValid: true, message: "" };
    }
  }

  // Add event listeners for real-time validation
  nameInput.addEventListener("input", function () {
    const validation = validateName(this.value); // Function call with parameter
    nameError.textContent = validation.message;
    nameError.style.display = validation.isValid ? "none" : "block";

    // Visual feedback
    if (validation.isValid) {
      this.style.borderColor = "#2D5B2A";
    } else {
      this.style.borderColor = "#E13C2D";
    }
  });

  ageInput.addEventListener("input", function () {
    const validation = validateAge(this.value);
    ageError.textContent = validation.message;
    ageError.style.display = validation.isValid ? "none" : "block";

    // Visual feedback
    if (validation.isValid) {
      this.style.borderColor = "#2D5B2A";
    } else {
      this.style.borderColor = "#E13C2D";
    }
  });

  countryInput.addEventListener("change", function () {
    const validation = validateCountry(this.value);
    countryError.textContent = validation.message;
    countryError.style.display = validation.isValid ? "none" : "block";

    // Visual feedback
    if (validation.isValid) {
      this.style.borderColor = "#2D5B2A";
    } else {
      this.style.borderColor = "#E13C2D";
    }
  });

  emailInput.addEventListener("input", function () {
    const validation = validateEmail(this.value);
    emailError.textContent = validation.message;
    emailError.style.display = validation.isValid ? "none" : "block";

    // Visual feedback
    if (validation.isValid) {
      this.style.borderColor = "#2D5B2A";
    } else {
      this.style.borderColor = "#E13C2D";
    }
  });

  interestsInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const validation = validateInterests(interestsInputs);
      interestsError.textContent = validation.message;
      interestsError.style.display = validation.isValid ? "none" : "block";
    });
  });

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields using our functions
    const nameValidation = validateName(nameInput.value);
    const ageValidation = validateAge(ageInput.value);
    const countryValidation = validateCountry(countryInput.value);
    const emailValidation = validateEmail(emailInput.value);
    const interestsValidation = validateInterests(interestsInputs);

    // Show/hide errors based on validation results
    nameError.textContent = nameValidation.message;
    nameError.style.display = nameValidation.isValid ? "none" : "block";

    ageError.textContent = ageValidation.message;
    ageError.style.display = ageValidation.isValid ? "none" : "block";

    countryError.textContent = countryValidation.message;
    countryError.style.display = countryValidation.isValid ? "none" : "block";

    emailError.textContent = emailValidation.message;
    emailError.style.display = emailValidation.isValid ? "none" : "block";

    interestsError.textContent = interestsValidation.message;
    interestsError.style.display = interestsValidation.isValid
      ? "none"
      : "block";

    // If all fields are valid, show success message
    if (
      nameValidation.isValid &&
      ageValidation.isValid &&
      countryValidation.isValid &&
      emailValidation.isValid &&
      interestsValidation.isValid
    ) {
      successMessage.style.display = "block";

      // Reset form after 3 seconds
      setTimeout(() => {
        form.reset();
        successMessage.style.display = "none";

        // Show celebration animation
        showCelebration();
      }, 3000);
    }
  });

  // Code playground functionality
  const htmlEditor = document.getElementById("html-editor");
  const runCodeButton = document.getElementById("run-code");
  const previewFrame = document.getElementById("preview-frame");

  // Function with parameter (HTML code) that returns a formatted document
  function createPreviewDocument(htmlCode) {
    return `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 15px;
                        background-color: #f0f0f0;
                    }
                    .african-pattern {
                        background: linear-gradient(45deg, #FF9E1B, #2D5B2A, #E13C2D);
                        height: 30px;
                        margin-bottom: 15px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="african-pattern"></div>
                ${htmlCode}
            </body>
            </html>
        `;
  }

  runCodeButton.addEventListener("click", function () {
    const htmlCode = htmlEditor.value;
    const previewDocument =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    const formattedDocument = createPreviewDocument(htmlCode); // Using function with parameter

    previewDocument.open();
    previewDocument.write(formattedDocument);
    previewDocument.close();

    // Add animation to button
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 100);
  });

  // Achievement system functionality
  const earnBadgeButton = document.getElementById("earn-badge");
  const badges = document.querySelectorAll(".badge");

  // Function to unlock a badge with animation
  function unlockBadge(badgeElement) {
    badgeElement.classList.add("unlocked");

    // Add animation
    badgeElement.style.animation = "badgeUnlock 0.5s ease forwards";

    // Remove animation after it completes
    setTimeout(() => {
      badgeElement.style.animation = "";
    }, 500);

    return true;
  }

  earnBadgeButton.addEventListener("click", function () {
    // Find first locked badge
    let found = false;

    badges.forEach((badge) => {
      if (!badge.classList.contains("unlocked") && !found) {
        const success = unlockBadge(badge); // Using function that returns value
        if (success) {
          badgesEarned++; // Modifying global variable
          found = true;
          console.log(`Badges earned: ${badgesEarned}`); // Demonstrating global scope usage

          // Update button text if all badges are unlocked
          if (badgesEarned >= badges.length) {
            earnBadgeButton.textContent = "All Badges Earned!";
            earnBadgeButton.disabled = true;
          }
        }
      }
    });

    if (!found && badgesEarned >= badges.length) {
      earnBadgeButton.textContent = "All Badges Earned!";
      earnBadgeButton.disabled = true;
    }

    // Button animation
    this.style.transform = "translateY(2px)";
    setTimeout(() => {
      this.style.transform = "";
    }, 100);
  });

  // Hero CTA button functionality
  const heroCta = document.getElementById("hero-cta");

  heroCta.addEventListener("click", function () {
    document.getElementById("signup").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Function to create confetti with parameters
  function createConfetti(amount, colors) {
    const container = document.body;

    for (let i = 0; i < amount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(confetti);

      // Remove confetti after animation completes
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }

  // Function to create animated particles
  function createParticles(count) {
    const container = document.body;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random properties
      const size = Math.random() * 20 + 5;
      const colors = [
        CONFETTI_COLORS[0],
        CONFETTI_COLORS[1],
        CONFETTI_COLORS[2],
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.backgroundColor = color;
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.top = Math.random() * 100 + "vh";
      particle.style.animationDuration = Math.random() * 20 + 10 + "s";
      particle.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(particle);
    }
  }

  // Celebration animation function
  function showCelebration() {
    const celebration = document.createElement("div");
    celebration.style.position = "fixed";
    celebration.style.top = "0";
    celebration.style.left = "0";
    celebration.style.width = "100%";
    celebration.style.height = "100%";
    celebration.style.backgroundColor = "rgba(0,0,0,0.7)";
    celebration.style.display = "flex";
    celebration.style.flexDirection = "column";
    celebration.style.alignItems = "center";
    celebration.style.justifyContent = "center";
    celebration.style.zIndex = "1000";
    celebration.style.color = "white";

    celebration.innerHTML = `
            <h2 style="font-size: 3rem; margin-bottom: 2rem; color: var(--primary);">Welcome to AfriTech Kids!</h2>
            <p style="font-size: 1.5rem; margin-bottom: 2rem;">Your learning journey begins now</p>
            <div style="font-size: 4rem;">🎉 🚀 💻</div>
            <button style="margin-top: 2rem; padding: 1rem 2rem; font-size: 1.2rem;" class="cta-button">Start Learning</button>
        `;

    document.body.appendChild(celebration);

    // Create confetti with parameters
    createConfetti(100, CONFETTI_COLORS);

    // Remove celebration when button is clicked
    celebration.querySelector("button").addEventListener("click", function () {
      document.body.removeChild(celebration);
    });
  }

  // Initialize the page with some example code
  htmlEditor.value = `<h1>Hello, AfriTech Kids!</h1>\n<p>Edit this code to create your own web page.</p>\n<button style="padding: 10px; background: #FF9E1B; color: white; border: none; border-radius: 5px;">Click Me!</button>`;

  // Trigger the run code button click after a short delay
  setTimeout(() => {
    runCodeButton.click();
  }, 500);

  // Add hover animations to course cards
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });
});
