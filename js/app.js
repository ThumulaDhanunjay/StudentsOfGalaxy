var emailId = "dhanu@gmail.com"
var password = "12345"
function accesstopage()
{
    var userId = document.getElementById("useremail").value
    var userpass = document.getElementById("userpass").value
    if(userId==emailId && userpass==password)
    {
        var fom = document.forms
        console.log(fom)
        fom[0].action="./html/Homepage.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId!=emailId && userpass==password)
    {
        document.getElementById("status").innerHTML="Email is wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(90deg,red,purple)"
        
    }
    else if(userId==emailId && userpass!=password)
    {
        document.getElementById("status").innerHTML="Password is wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(90deg,rgb(237, 18, 55),red)"
        
    }
    else{
        document.getElementById("status").innerHTML="Email and Password is wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,red)"
    }
}
function visiblepass()
{
    var fom = document.forms
    fom[0].elements[1].type="text"
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
    var img = document.images
    img[0].src="./astro/asset/logo/openeye.png"
}
function invisiblepass()
{
    var fom = document.forms
    fom[0].elements[1].type="password"
    var img = document.images
    img[0].src="./astro/asset/logo/closewye.png"
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}