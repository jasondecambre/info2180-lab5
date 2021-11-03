window.onload = function (){
    var lookup = document.getElementById("lookup");
    var lookCities = document.getElementById("lookup_cities");

    lookup.addEventListener("click",function(event){
        event.preventDefault();
        var httpRequest = new XMLHttpRequest();
        var search = document.getElementById("country").value;        
        httpRequest.onreadystatechange = function(){
        if(httpRequest.status === 200){ //if request went through OK 
            document.getElementById("result").innerHTML = httpRequest.responseText;
        }
    }
            httpRequest.open("GET", "http://localhost/info2180-lab5/world.php?country=" + search + "&context=not_cities", true);
            httpRequest.send();
            
    });

    lookCities.addEventListener("click",function(event){
        event.preventDefault();
        var httpRequest = new XMLHttpRequest();
        var search = document.getElementById("country").value;        
        httpRequest.onreadystatechange = function(){
        if(httpRequest.status === 200){ //if request went through OK 
            document.getElementById("result").innerHTML = httpRequest.responseText;
        }
    }
            httpRequest.open("GET", "http://localhost/info2180-lab5/world.php?country=" + search + "&context=cities", true);
            httpRequest.send();
            
    });

}


