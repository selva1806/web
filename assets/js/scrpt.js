function checkpass(){
    if(document.getElementById("pass1").length > 8 && (document.getElementById("pass1").length === document.getElementById("pass2")))
    {          console.log("password satisfied");

        return false;
    }
    else{
        console.log("password mismatch");
        return false;
    }
    }