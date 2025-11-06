// Tab switching
function openTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// AI Diagnosis Simulation
function simulateDiagnosis() {
  const result = document.getElementById('diagnosisResult');
  result.innerHTML = "🔄 AI analyzing your input...";
  setTimeout(() => {
    const aiResults = [
      "Possible Iron Deficiency (Accuracy: 82%)",
      "Mild Thyroid Symptoms Detected (Accuracy: 89%)",
      "AI Suggests: Consult a cardiologist for chest discomfort.",
      "No severe issue found. Stay hydrated and exercise regularly."
    ];
    result.innerHTML = `<strong>${aiResults[Math.floor(Math.random()*aiResults.length)]}</strong>`;
  }, 2500);
}

// AI Diet Generator
function generateDiet() {
  const goal = document.getElementById('dietGoal').value;
  const result = document.getElementById('dietResult');
  const diets = {
    gain: "🥑 Eat high-protein foods, eggs, milk, rice, nuts, and avocado smoothies.",
    lose: "🥗 Focus on salads, soups, fruits, and low-carb meals with daily walking.",
    maintain: "🍎 Balanced diet: proteins, greens, and fruits — avoid fried foods."
  };
  result.innerHTML = `<strong>${diets[goal]}</strong>`;
}

// Nearby Hospital using Geolocation
function findHospital() {
  const output = document.getElementById('hospitalResult');
  output.innerHTML = "📍 Detecting location...";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      output.innerHTML = `✅ Location detected! Latitude: ${pos.coords.latitude.toFixed(2)}, Longitude: ${pos.coords.longitude.toFixed(2)}. <br>Suggested: AI Hospital, City Care Clinic nearby.`;
    });
  } else {
    output.innerHTML = "❌ Location not supported in your browser.";
  }
}

// Appointment Alert
function setAppointment() {
  const time = document.getElementById('appointmentTime').value;
  const result = document.getElementById('appointmentResult');
  if (time) {
    result.innerHTML = `🔔 Appointment set for <strong>${new Date(time).toLocaleString()}</strong>`;
  } else {
    result.innerHTML = "⚠️ Please select a valid time.";
  }
}
