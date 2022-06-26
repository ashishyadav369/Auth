const nextBtn = document.querySelector(".nextBtn");
const center1 = document.querySelector(".centerBlock");
const center2 = document.querySelector(".centerBlock2");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const verifyBtn = document.querySelector(".verifyBtn");
const otp = document.querySelector(".oneTime")

const usr = "mordor";
const pass = "bilbo";
let count = Number(3);

function genOTP() {
    return Math.floor(100000 + Math.random() * 800000);
}
let OTP = genOTP();
nextBtn.addEventListener("click", () => {

    if(username.value == usr && password.value == pass) {
        center1.classList.toggle("hideBlock");
        center2.classList.toggle("showBlock");
        var tempParam = {
        from_name : "fsociety.dat",
        to_name : "mordor",
        message : OTP,
    };
    emailjs.send('service_hi07rkd','putin',tempParam).then(function(res) {
        console.log("success", res.status);
    })
    } else {
        alert("Wrong credentials !");
    }
   
});
verifyBtn.addEventListener("click", () => {
    if(otp.value == OTP) {
        alert("Authentication Successful !");
    } else {
        alert("Wrong access code try again !");
    }
});
