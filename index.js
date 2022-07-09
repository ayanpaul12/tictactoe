var c = 0;
var a = [];
var z = null;

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (i) {
            if (c % 2 == 0)
                z = "x";
            else
                z = "o";
            c++;
            this.setAttribute("style", "background-image: url('images/" + z + ".png');");
            var idb = this.id;
            a[idb] = z;


            if ((a[0] == a[1] && a[1] == a[2] && a[1] != null)) {
                
                document.querySelectorAll(".ld3")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";
             for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[3] == a[4] && a[3] == a[5] && a[5] != null) {
                
                document.querySelectorAll(".ld4")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[6] == a[7] && a[6] == a[8] && a[6] != null) {
                
                document.querySelectorAll(".ld5")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[0] == a[4] && a[4] == a[8] && a[4] != null) {
                
                document.querySelectorAll(".ld1")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[2] == a[4] && a[4] == a[6] && a[4] != null) {
                
                document.querySelectorAll(".ld2")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[0] == a[3] && a[3] == a[6] && a[6] != null) {
                
                document.querySelectorAll(".ld6")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[1] == a[4] && a[4] == a[7] && a[4] != null) {
                
                document.querySelectorAll(".ld7")[0].style.visibility = "visible";

                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            } else if (a[2] == a[5] && a[5] == a[8] && a[8] != null) {
                
                document.querySelectorAll(".ld8")[0].style.visibility = "visible";
                document.querySelectorAll("h1")[0].innerHTML = "" + z + " wins🏆";for(var i=0;i<document.querySelectorAll("button").length;i++)  { document.querySelectorAll("button")[i].disabled=true;}
            }
            else{
                if(a[0]!=null&& a[1]!=null&&a[2]!=null&&a[3]!=null&&a[4]!=null&&a[5]!=null&&a[6]!=null&&a[7]!=null&&a[8]!=null)
                document.querySelectorAll("h1")[0].innerHTML ="Match is drawn📍";
                else
                document.querySelectorAll("h1")[0].innerHTML ="Next move⏭️";
            }




        }, {
            once: true
        }

    )

    
    
}