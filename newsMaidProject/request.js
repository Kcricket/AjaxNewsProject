



function loadDoc(url) {
    url = "https://api.allorigins.win/raw?url="+encodeURIComponent(url);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 1){
           // When conection with server is established, the gif shall be revealed
       // document.getElementById("gif").style.alignSelf="center";

        document.getElementById("gif").style.visibility="visible";
       }
      if (this.readyState == 4 && this.status == 200) { setTimeout(() => { 
        data = JSON.parse(this.responseText)
        console.log(data);
        //document.getElementById("container").innerHTML = this.responseText;
        loadParameters(data);
        document.getElementById("gif").style.visibility="hidden";

        // Now that the request ended we send a message and make the gif be hidden again 
        }, 2000);
      }
    };
    // The response time is very short. So I implemented the upper setTimeout func to delay it
    xhttp.open("GET", url, true);
    xhttp.send();
}

window.onload = function searchParameter(){
    var valueE = document.getElementById('input').value;
    if(leidoDelInput!=""){
        loadDoc("https://newsapi.org/v2/everything?q="+valueE+"&sortBy=publishedAt&apiKey=397f11cdcd8841c59d79d457f2167198")

    }else
    alert('insert somethin ')
      

}

function loadParameters(data){
    var container = document.getElementById('container');
    for(i=0; i<data.articles.length; i++){
        li=document.createElement("li");
        li.innerHTML= data.articles[i].title;
        container.appendChild(li);
        
    }
}



 
