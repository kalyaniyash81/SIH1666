function requestMentorship(mentorName) {
    document.getElementById("mentor-name").textContent = `Request mentorship from ${mentorName}`;
    document.getElementById("request-popup").style.display = "block";
  }
  
  function submitRequest() {
    const studentName = document.getElementById("student-name").value;
    const message = document.getElementById("message").value;
  
    if (studentName && message) {
      // Here you can add code to send the request to a backend or database
      console.log("Request Submitted by:", studentName, "Message:", message);
  
      // Close popup and show success message
      document.getElementById("request-popup").style.display = "none";
      document.getElementById("request-status").style.display = "block";
    } else {
      alert("Please fill out all fields.");
    }
  }
  
  function closePopup() {
    document.getElementById("request-popup").style.display = "none";
  }
  
  function closeStatus() {
    document.getElementById("request-status").style.display = "none";
  }
  