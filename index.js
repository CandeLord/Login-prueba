//#region LOGIN
const submit = document.getElementById("submit");
const inputMail = document.getElementById("inputmail");
const inputPassword = document.getElementById("inputpass");


submit.addEventListener("click", function(e){
    e.preventDefault();
});
inputMail.addEventListener("change", function(e){
    mail = e.target.value;
});
inputPassword.addEventListener("change", function(e){
   password = e.target.value;
})

//#endregion
//#region CREACIÓN USUARIO
const saveChanges = document.getElementById("btnSave");
const inputCreateMail = document.getElementById("inputcreatemail");
const inputCreatePassword = document.getElementById("createpass");
const inputCreateRePassword = document.getElementById("createrepeatpass");

let createMail = "";
let createPassword ="";
let createRePassword ="";

saveChanges.addEventListener("click", function(e){
    e.preventDefault();
    console.log(createMail, createPassword, createRePassword);
});
inputCreateMail.addEventListener("change", function(e){
    createMail = e.target.value;
 })
inputCreatePassword.addEventListener("change", function(e){
    createPassword = e.target.value;
});
inputCreateRePassword.addEventListener("change", function(e){
   createRePassword = e.target.value;
})
//#endregion
let mail = "";
let password ="";
