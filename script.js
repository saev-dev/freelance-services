function sendWhatsApp() {
  const selectedService = document.getElementById("serviceSelect").value;
  if (!selectedService) {
    alert("Please select a service first!");
    return;
  }

  const message = `Hi! I'm interested in your ${selectedService} service. Are you available in my area?`;
  const encodedMsg = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/601139109318?text=${encodedMsg}`; // Replace with your real number

  window.open(whatsappURL, "_blank");
}
function subscribeEmail() {
  const email = document.getElementById("emailInput").value;
  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address!");
    return;
  }
  alert(`Thanks! We'll keep you posted at ${email} 📬`);
}
