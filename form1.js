var full_name = document.getElementById('full_name')
var email = document.getElementById('email');
var phn = document.getElementById('phone');
var addr = document.getElementById("address");
var cit = document.getElementById("city");
var sta = document.getElementById("state");
var agree = document.getElementById("i_agree");
var m = document.getElementById("M");
var f = document.getElementById("F");


valid = 1;

gender = ""
m.addEventListener("click" , (e)=>{
    gender = "male"
})

f.addEventListener("click" , (e)=>{
    gender = "female"
})


var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var phoneRegex = /^[6-9]{1}[0-9]{9}$/;


document.querySelector('.btn-primary').addEventListener("click", function (e) {

    
    console.log("Your Details:");


    if (full_name.value.length < 3) {
        if (full_name.value == "") {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerText = "Please Enter full Name";
            console.log("if")
            valid = 0;
        } else {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerText = "Please enter full name can't be less than 3 characters";
            console.log("else")
             valid=0;
        } 
    }
    else if (!emailRegex.test(email.value)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Please Enter Your Email";
         valid =0;
    }

    else if (!phoneRegex.test(phn.value)) {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Please Enter Your Phone Number Properly";
       
    }
  
    else if (addr.value == "") {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Please Enter Your Address Properly!";
      
    }
 
    else if (cit.value == "") {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Please Enter Your City";

    } else if (sta.value == "") {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Please Enter Your State!";
    }
    else if(!agree.checked)
    {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "Please Accept terms and condition!";
    } 
    else if(gender == "")
    {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerText = "please select male or females!";
    }
    else {
        document.getElementById("error").style.display = "none";
    }
    console.log(`Full Name : ${full_name.value} |  Email : ${email.value} | Phone:${phn.value} | Geneder:${gender}|Address : ${addr.value} | City : ${cit.value} | State : ${sta.value} | Agree:${agree.checked} `)
    document.getElementById("myForm").reset();
    e.preventDefault();
})