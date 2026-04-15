document.getElementById("contactform").addEventListener("submit", function(e){
 e.preventDefault();
    alert("Thank you! Your message has been sent. We will contact you soon...");
    this.reset();
});
