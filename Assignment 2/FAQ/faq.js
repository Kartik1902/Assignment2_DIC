var acc = document.getElementsByClassName("accordion");
var i;

function clearAll(){
  console.log("CALLED");
   var ps=document.querySelectorAll(".panel")
  console.log(ps);
  for (i = 0; i < ps.length; i++)
  {
    ps[i].style.maxHeight=null;
    acc[i].classList.remove("active");
 }
}
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    clearAll();
    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
