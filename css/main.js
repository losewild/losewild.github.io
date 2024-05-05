//获取控件
var buttom = document.getElementById('commk');


function gettext(buttom){
    var comtext = document.getElementById('comtext');
    var lenth = comtext.rows.length;
    var newRow = comtext.insertRow(lenth);
    var comment = prompt('What is Your saying?');
    var date = new Date();
    newRow.innerHTML = '<p style="color: #61178A">' + comment + '</p>' + '<p style="color:grey">' + date + '</p>';
    
};

var psd = document.getElementById('login');
function login(psd){
   var pd = prompt('Got password');
   if (pd == '20214-19911-8MKBR-SdkQG-BBBFF-oll'){
     window.open('about.html');
   };        
};
