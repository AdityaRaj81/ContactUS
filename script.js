const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xnnpwgkl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Thanks for contacting us!");
      form.reset();
    } else {
      alert("There was a problem. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong!");
  }
});
