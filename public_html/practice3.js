
                function checkpswd(){
                        var pswd = document.getElementById("password1").value;
                        var pswd2 = document.getElementById("password2").value;
                        if (pswd.length <8){
                                alert("Password must be at least 8 characters.");
                        //      document.getElementById("message").innerHTML = "Password must be at least 8 characters.";
                                                return false;
                        }
                        if (pswd != pswd2){
                                alert("The two passwords do not match.");
                                return false;
                        }
                        else{
                                alert("The two passwords match.");
                        }
                }


