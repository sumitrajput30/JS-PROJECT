let sign=()=>{
    let inpname=document.querySelector("#name").value ;
    let inpemail=document.querySelector("#email").value ;
    let inppass=document.querySelector("#pass").value ;
    let inpcpass=document.querySelector("#cpass").value ;


   let errname=document.querySelector("#errorname")
   let erremail=document.querySelector("#erroremail")
   let errpass=document.querySelector("#errorpass")
   let errcpass=document.querySelector("#errorcpass")

   if(inpname==""){

    let inputname=document.querySelector("#name")
    inputname.placeholder="please fill the form"
    inputname.style.border="1px solid red"
    errname.innerHTML="Please fill the Name field"
    errname.style.color="red"
    return false;
   }


// email

else if( !(inpemail.includes("@") && inpemail.includes(".com")))
    {
    erremail.innerHTML="please enter valid email"
    return false;
}

else if (!(inppass.match([/1234567890/])

    && inppass.match([/!@#$%^&*()/])
    && inppass.match([/a-z/])
    && inppass.match([/A-Z/])
  
 ))
 {
 errpass.innerHTML="password is not same";
 let n=document.querySelector("#cpass")
 // n.value=""
 n.focus()

}
 



 if(inppass!==inpcpass)
   {
    
    return false;

   }

//    else{
//     errcpass.innerHTML="password not match."
//     errcpass.style.color="red"
//     return false;
//    }



   localStorage.setItem("Name",inpname)
   localStorage.setItem("Email",inpemail)
   localStorage.setItem("Password",inppass)
   localStorage.setItem("Cpassword",inpcpass)

   location.href = "Log.html"
   return false;

}

// login

let login=()=>{
    let loginemail=document.querySelector("#loginemail").value
    let loginpass=document.querySelector("#loginpass").value


    let localemail= localStorage.getItem("Email")
    let pass1= localStorage.getItem("Password") 

    if(loginemail==localemail && loginpass==pass1)
    {
        location.href = "./index.html"
       
    }
    else
    {
        alert("invalid username or Password")
    }

    return false
}