const form = document.getElementById("contactform");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const design = document.getElementById("design").value;

  // Patterns
  const namePattern = /^[A-Za-z\s]{3,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  // Validation
  if (!namePattern.test(name)) {
    alert("Enter a valid name (min 3 letters, no numbers)");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("Enter a valid 10-digit phone number");
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters");
    return;
  }

  if (design === "") {
    alert("Please select a design");
    return;
  }

  // Success
  alert("✅ Your form has been submitted successfully!");
  form.reset();
});