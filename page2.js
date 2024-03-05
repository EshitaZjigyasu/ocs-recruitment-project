document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5000/get')
    loadHTMLTable([]);
})

function navigateToSignIn(){
    window.location.href="ocsrec.html";
}

function loadHTMLTable(data){
    const table=document.querySelector('table tbody');
    //let tableHtml="";
}