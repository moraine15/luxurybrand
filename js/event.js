function validateForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthDate = document.getElementById("birthDate").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;

  // Ambil elemen error <small>
  const fullNameError = document.getElementById("fullNameError");
  const emailError = document.getElementById("emailError");
  const birthDateError = document.getElementById("birthDateError");
  const genderError = document.getElementById("genderError");
  const termsError = document.getElementById("termsError");

  // Reset pesan error
  fullNameError.textContent = "";
  emailError.textContent = "";
  birthDateError.textContent = "";
  genderError.textContent = "";
  termsError.textContent = "";

  let valid = true;

  // Full Name: wajib + huruf kapital di awal
  if (!fullName) {
    fullNameError.textContent = "Full Name is required.";
    valid = false;
  } else if (fullName.charAt(0) !== fullName.charAt(0).toUpperCase()) {
    fullNameError.textContent = "Full Name must start with a capital letter.";
    valid = false;
  }

  // Email: wajib + format sederhana
  if (!email) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email (e.g. yourname@gmail.com).";
    valid = false;
  }

  // Birth Date: wajib
  if (!birthDate) {
    birthDateError.textContent = "Birth Date is required.";
    valid = false;
  }

  // Gender: wajib
  if (!gender) {
    genderError.textContent = "Please select a gender.";
    valid = false;
  }

  // Terms: wajib
  if (!terms) {
    termsError.textContent = "You must agree to the Terms of Service.";
    valid = false;
  }

  // Jika ada yang tidak valid, hentikan submit
  if (!valid) {
    return false;
  }

  // ✅ Semua valid → tampilkan modal sukses
  document.getElementById("successModal").style.display = "block";

  const confirmationText = document.querySelector(".success-message");
  if (confirmationText) {
    confirmationText.textContent = "Thank you! Your form has been successfully submitted.";
  }

  return false; // Cegah reload halaman
}

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}
// Close modal if user clicks outside the modal
window.onclick = function (event) {
  const modal = document.getElementById('successModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Add event listener after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Fade in body
  document.body.classList.add('loaded');

  // Set up form submission
  const form = document.getElementById('registrationForm');
  if (form) {
    form.onsubmit = function (event) {
      event.preventDefault();
      validateForm();
    };
  }

  // Fade in sections when scrolling
  const sections = document.querySelectorAll('.eventSection, .regisSec, .trailerVideo');
  sections.forEach(section => {
    section.classList.add('fade-in');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scroll behavior (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});