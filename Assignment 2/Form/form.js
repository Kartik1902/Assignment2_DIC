function formValidate() {
    
    console.log("RUNNING VALIDATION")
    if( document.getElementById("Name").value.length <= 3 ) {
       alert( "Please provide your ful name!" );
       document.Form.Name.focus() ;
       return false;
    }
    if( document.getElementById("Query").value == "" ) {
        alert( "Please provide your query!" );
        document.Form.Name.focus() ;
        return false;
     }

    if( document.getElementById("Email").value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    var num=document.getElementById("num").value;
    if( num == "" || isNaN(num) || num.length != 10 ) {
       alert( "Please provide a Contact No in the format ###-###-####." );
       document.myForm.Zip.focus() ;
       return false;
    }
    return( true );
 }