function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
 
    const serviceID = "service_wycv7er"; // Replace with your EmailJS Service ID
    const templateID = "template_muk3n1d"; // Replace with your EmailJS Template ID
 
    const templateParams = {
       name: name,
       email: email,
       subject: subject,
       message: message,
    };
 
    emailjs
       .send(serviceID, templateID, templateParams)
       .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById('successMessage').style.display = 'block';
          document.getElementById('errorMessage').style.display = 'none';
          document.getElementById('contactForm').reset();
       })
       .catch((error) => {
          console.error("FAILED...", error);
          document.getElementById('successMessage').style.display = 'none';
          document.getElementById('errorMessage').style.display = 'block';
       });
 }
 