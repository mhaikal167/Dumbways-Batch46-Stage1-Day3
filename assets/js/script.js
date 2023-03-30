function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let destination = "skadskuds.f@gmail.com"
    const contact = document.createElement("a")
    contact.setAttribute('target', '_blank');
    contact.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${destination}&su=${subject}&body=Hallo nama saya ${name} saya ingin ${message} ,bila berkenan hubungi saya di ${phone}` 
    contact.click()

    let data = {
        nama:name,
        email:email,
        phone:phone,
        subject:subject,
        message:message,
    }
}
