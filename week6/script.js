// script.js
document.addEventListener("DOMContentLoaded", function () {
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

  // Validate name field
  function validateName() {
    if (nameInput.value.trim().length < 2) {
      nameError.style.display = "block";
      return false;
    } else {
      nameError.style.display = "none";
      return true;
    }
  }

  // Validate age field
  function validateAge() {
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 5 || age > 18) {
      ageError.style.display = "block";
      return false;
    } else {
      ageError.style.display = "none";
      return true;
    }
  }

  // Validate country field
  function validateCountry() {
    if (countryInput.value === "") {
      countryError.style.display = "block";
      return false;
    } else {
      countryError.style.display = "none";
      return true;
    }
  }

  // Validate email field
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.style.display = "block";
      return false;
    } else {
      emailError.style.display = "none";
      return true;
    }
  }

  // Validate interests field
  function validateInterests() {
    let checked = false;
    interestsInputs.forEach((input) => {
      if (input.checked) checked = true;
    });

    if (!checked) {
      interestsError.style.display = "block";
      return false;
    } else {
      interestsError.style.display = "none";
      return true;
    }
  }

  // Add event listeners for real-time validation
  nameInput.addEventListener("input", validateName);
  ageInput.addEventListener("input", validateAge);
  countryInput.addEventListener("change", validateCountry);
  emailInput.addEventListener("input", validateEmail);
  interestsInputs.forEach((input) => {
    input.addEventListener("change", validateInterests);
  });

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isAgeValid = validateAge();
    const isCountryValid = validateCountry();
    const isEmailValid = validateEmail();
    const isInterestsValid = validateInterests();

    // If all fields are valid, show success message
    if (
      isNameValid &&
      isAgeValid &&
      isCountryValid &&
      isEmailValid &&
      isInterestsValid
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

  runCodeButton.addEventListener("click", function () {
    const htmlCode = htmlEditor.value;
    const previewDocument =
      previewFrame.contentDocument || previewFrame.contentWindow.document;

    previewDocument.open();
    previewDocument.write(`
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
        `);
    previewDocument.close();
  });

  // Achievement system functionality
  const earnBadgeButton = document.getElementById("earn-badge");
  const badges = document.querySelectorAll(".badge");

  earnBadgeButton.addEventListener("click", function () {
    // Find first locked badge
    let found = false;

    badges.forEach((badge) => {
      if (!badge.classList.contains("unlocked") && !found) {
        badge.classList.add("unlocked");
        found = true;

        // Update button text if all badges are unlocked
        const allUnlocked =
          document.querySelectorAll(".badge:not(.unlocked)").length === 0;
        if (allUnlocked) {
          earnBadgeButton.textContent = "All Badges Earned!";
          earnBadgeButton.disabled = true;
        }
      }
    });

    if (!found) {
      earnBadgeButton.textContent = "All Badges Earned!";
      earnBadgeButton.disabled = true;
    }
  });

  // Hero CTA button functionality
  const heroCta = document.getElementById("hero-cta");

  heroCta.addEventListener("click", function () {
    document.getElementById("signup").scrollIntoView({
      behavior: "smooth",
    });
  });

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

    // Remove celebration when button is clicked
    celebration.querySelector("button").addEventListener("click", function () {
      document.body.removeChild(celebration);
    });
  }

  // Initialize the page with some example code
  htmlEditor.value = `<h1>Hello, AfriTech Kids!</h1>\n<p>Edit this code to create your own web page.</p>\n<button>Click Me!</button>`;
  runCodeButton.click();
});
