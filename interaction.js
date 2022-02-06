

//Text'e girilen metinleri listeye ekleme.


function newElement(){
    let liDOM = document.createElement("li");
    const inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    liDOM.appendChild(t);
    if(inputValue === ''){
        alert("You must write something!");
    }else{
        document.getElementById("list").appendChild(liDOM);
    }
    document.getElementById("task").value= "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className= "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



