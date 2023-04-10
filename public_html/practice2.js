        function change_colors(){
                        var redtxt = document.getElementById("redtxt").value;
                        var greentxt = document.getElementById("greentxt").value;
                        var bluetxt = document.getElementById("bluetxt").value;
                        var borderR = document.getElementById("borderR").value;
                        var borderG = document.getElementById("borderG").value;
                        var borderB = document.getElementById("borderB").value;
                        var width = document.getElementById("width").value;
                        var change = document.getElementById("paragraph");
                        change.style.backgroundColor = "rgb("+redtxt+","+greentxt+","+bluetxt+")";        
                        change.style.borderColor= "rgb("+borderR+","+borderG+","+borderB+")";
                        change.style.borderWidth = width +"px";}
