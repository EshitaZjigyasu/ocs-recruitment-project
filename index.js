function navigatetoTableData(){
    if (validateForm()==true)
    {
        window.location.href = "tableDataShow.html";
    }
    else
    {
        alert("Please enter both username and password!")
    }
}
function validateForm(){
    let username=document.getElementById('username').value;
    let pwd=document.getElementById('password').value;
    if(username&&pwd)
    {
        return true
    }
    else
    {
        return false
    }
}