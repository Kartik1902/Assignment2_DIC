function formValidate() {
    
    console.log("RUNNING VALIDATION");
    if( document.getElementById("Uname").value.length <= 7 ) {
       alert( "Please provide valid Username!" );
       return false;
    }
    if( document.getElementById("Roll").value == "" ||document.getElementById("Uname").value.length <= 7 ) {
        alert( "Please provide vaild Roll No. !" );
        return false;
     }
    var num=document.getElementById("num").value;
    if( num == "" || isNaN(num) || num.length != 4 ) {
       alert( "Please provide a Year in the format YYYY." );
       return false;
    }
    document.cookie=`username=${ document.getElementById("Uname").value}, yob=${document.getElementById("num").value}`;
    window.localStorage.setItem("RollNo",document.getElementById("Roll").value);
    console.log(document.cookie);
    console.log(localStorage.getItem("RollNo"))
    return( true );
 }