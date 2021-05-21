var referenciaFuncion;
var numPagina =1;

function loadDoc(url) {
    url = "https://api.allorigins.win/raw?url="+encodeURIComponent(url);
    //url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-14&sortBy=publishedAt&apiKey=397f11cdcd8841c59d79d457f2167198'
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 1){
           // When conection with server is established, the gif shall be revealed
       
        document.getElementById("gif").style.visibility="visible";
        }


      if (this.readyState == 4 && this.status == 200) { setTimeout(() => { 
        const data = JSON.parse(xhttp.responseText);
        console.log(data);      
        // Now that the request ended we send a message and make the gif be hidden again   
        document.getElementById("gif").style.visibility="hidden";
        addRenderHtmlNames(data);
        }, 2000);


      }
    };
    // The response time is very short. So I implemented the upper setTimeout func to delay it
    xhttp.open("GET", url, true);
    xhttp.send();

}
function loadDoc2(url) {
  url = "https://api.allorigins.win/raw?url="+encodeURIComponent(url);
  //url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-14&sortBy=publishedAt&apiKey=397f11cdcd8841c59d79d457f2167198'
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 1){
         // When conection with server is established, the gif shall be revealed
     
      document.getElementById("gif").style.visibility="visible";
      }


    if (this.readyState == 4 && this.status == 200) { setTimeout(() => { 
      const data = JSON.parse(xhttp.responseText);
      console.log(data);      
      // Now that the request ended we send a message and make the gif be hidden again   
      document.getElementById("gif").style.visibility="hidden";
      addRenderHtmlSearch(data);
      }, 2000);


    }
  };
  // The response time is very short. So I implemented the upper setTimeout func to delay it
  xhttp.open("GET", url, true);
  xhttp.send();

}



window.onload=()=>{
  loadDoc("https://newsapi.org/v2/everything?q=tesla&from=2021-04-21&sortBy=publishedAt&apiKey=397f11cdcd8841c59d79d457f2167198");


}
function addRenderHtmlNames(data){
  const container = document.getElementById('container');
  div=document.createElement("div");
  div.setAttribute("id", "divNot");
  //document.body.appendChild(div);
  // var htmlString= "";
  for (let i=0; i < 10; i++){
        //Se guarda en la variable a la vez que se le da formato
      //Image of the new:
      boton=document.createElement("button");
      boton.addEventListener("click",()=>showDetails(data.articles[i]),false )
      boton.innerHTML="Más información";

      li=document.createElement("li");
      //htmlString += "<p> Article name:<br/> "+data.articles[i].title+" <p>";  
      li.innerHTML= data.articles[i].title;;

      br=document.createElement("br");


      li.appendChild(br)
      li.appendChild(boton);
      div.appendChild(li);
      container.appendChild(div);

  }
}

  function addRenderHtmlSearch(data){
    const container2 = document.getElementById('container2');

    div=document.createElement("div");
    div.setAttribute("id", "divNot3");
    //div.innerHTML('');

    //document.body.appendChild(div);
    // var htmlString= "";
    for (let i=0; i < 10; i++){
          //Se guarda en la variable a la vez que se le da formato
        //Image of the new:
        boton=document.createElement("button");
        boton.addEventListener("click",()=>showDetails(data.articles[i]),false )
        boton.innerHTML="Más información";

        li=document.createElement("li");
        //htmlString += "<p> Article name:<br/> "+data.articles[i].title+" <p>";  
        li.innerHTML= data.articles[i].title;;

        br=document.createElement("br");


        li.appendChild(br)
        li.appendChild(boton);
        div.appendChild(li);
        container2.appendChild(div);

    }
    //Se inserta en el correspondiente div 
}


//Now i will make a method to display the Information that loads when the page does


function showDetails(data){
  modal = document.getElementById("modalDetalle");
    if(data.author==null)
        modal.children[0].children[0].children[1].innerHTML= "No hay autor";
     else 
          htmlString= "<p> Author`s name:<br/> "+data.author+" <p>";
          modal.children[0].children[0].children[1].innerHTML= htmlString;

            // modal.children[0].children[0].children[1].innerHTML= data.author;

      if(data.content==null)
          modal.children[0].children[0].children[2].innerHTML= "No hay contenido";
        else 
            htmlString= "<p> The content:<br/> "+data.content+" <p>";
            modal.children[0].children[0].children[2].innerHTML= htmlString;
    
      if(data.description==null)
            modal.children[0].children[0].children[3].innerHTML= "No hay descripcion";
        else 
            htmlString= "<p> The description:<br/> "+data.description+" <p>";
            modal.children[0].children[0].children[3].innerHTML= htmlString;

            htmlString= "<p> Date of publish:<br/> "+data.publishedAt+" <p>";
            modal.children[0].children[0].children[4].innerHTML= htmlString;

            modal.children[0].children[0].children[5].href= data.url;
            htmlString= "<p> View More...:<br/> "+data.url+" <p>";
            modal.children[0].children[0].children[5].innerHTML= htmlString;
  
            //modal.innerHTML = data.author;
            modal.style.display = "block";
            
    }

function peticionBuscador(){
  if(referenciaFuncion!=peticionBuscador){
    numPagina=1;
  }
  evento= window.event;
  leidoDelInput= evento.target.value;
  if(leidoDelInput!=""){
    loadDoc2("https://newsapi.org/v2/everything?q="+leidoDelInput+"&page"+numPagina+"&pageSize=15&apiKey=397f11cdcd8841c59d79d457f2167198");
  }
  else{
    
  }
      referenciaFuncion=peticionBuscador;
}



