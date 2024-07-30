const formEmail = document.getElementById("frm-email")
formEmail.addEventListener("submit", sendEmail)

const serviceId = "service_dq66346"
const templateId ="template_k288s2e"
const apiKey = "tWYqMt6aWEVp4Qom1"

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,formEmail,apiKey)
    .then(result => Swal.fire("Su mensaje se ha enviado correctamente") )
    .catch(error=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo ha salido mal!, No se ha podido enviar tu mensaje",
        });
    })
}