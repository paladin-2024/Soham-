function sendMail() {
  var params = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
  };
  const serviceID = "service_t895gto";
  const templateID = "template_g2rko59";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("firstName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully!!")

    })
    .catch(err=>console.log(err));

}
