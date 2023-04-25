//--------EncryptionGlobal---------
var inputMsg = document.getElementById("inputMsg")
var encKey = document.getElementById("encKey")
var encMsg = document.getElementById("encMsg")
//var encBtn = document.getElementById("encBtn")
//--------DecryptionGlobal---------
var inputEnc = document.getElementById("inputEnc")
var decKey = document.getElementById("decKey")
var decMsg = document.getElementById("decMsg")
var decBtn = document.getElementById("decBtn")

class EncApp{
constructor(){}
  
  generateKey(inputMsgs){
   var keyDataArray=[];
   for(var i = 0 ; i < inputMsgs.length;i+=1){
   var keyAlgorithm_one=Math.floor(Math.random()*10)*(Math.random()*10)+(Math.random()*1000)%(Math.random()*10);
   
   var keyAlgorithm_two=Math.floor(Math.random()*10)*(Math.random()*10)+(Math.random()*1000)%(Math.random()*10);
  var keyAlgorithm=(keyAlgorithm_one*2)^keyAlgorithm_two
  document.getElementById("test").value=i+1+";"+keyAlgorithm//keyAlgorithm
   keyDataArray.push(keyAlgorithm)
        }
    return  keyDataArray; 
  }
  
  encData(genKey,inputMsgs){
    let encDataArray=[];
    for(var i=0;i<inputMsgs.length;i+=1){
    encDataArray.push((inputMsgs.charCodeAt(i))^genKey[i]);
        }
    return encDataArray;
  }
}

class DecApp{
constructor(){}
  decData(inputEnc,decKey){
    let decDataArray=[];
    for(var i=0;i<inputEnc.length ;i+=1){
    decDataArray.push(inputEnc.charCodeAt(i)^decKey.charCodeAt(i));
        }
    return decDataArray;
  }
}

function main(){
  inputMsg.oninput =function(){
    try{
   const MyEncApp = new EncApp();
   enckey=MyEncApp.generateKey(inputMsg.value)
   encdata=MyEncApp.encData(enckey,inputMsg.value)
   encKey.value=btoa(unescape(String.fromCharCode.apply(null,enckey)));
   encMsg.value=btoa(unescape(String.fromCharCode.apply(null,encdata)));
    }
    catch(e){
      alert(e+"Currently only English is supported.Developer is trying to resolve this issue, thank you for understanding.")
    }
  }
  decBtn.onclick =function(){
     const MyDecApp = new DecApp();
     try{
     decdata=MyDecApp.decData(atob(inputEnc.value),atob(unescape(decKey.value)));
     }
     catch(e){
      alert(e+" Base64 encoded input is expected.") 
     }
   decMsg.value=String.fromCharCode.apply(null,decdata);
  }
}
