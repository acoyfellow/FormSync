/**
 * FormSync instance
 *
 * @class FormSync
 * @constructor
 */
function FormSync (options) {};

// Loads LocalForage
FormSync.prototype.init= function(cb){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.4.3/localforage.min.js';
    script.onreadystatechange = cb;
    script.onload = cb;
    head.appendChild(script);
};

// Loads LocalForage config, iterates over the data found, sets by element #id
FormSync.prototype.checkLocal= function(cb){
   localforage.config({
	    name        : 'FormSync',
	    version     : 1.0,
	    storeName   : 'form_data',
	    description : 'Sync all form elements locally'
  });
  window.clearFormSync= localforage.clear;
  localforage.iterate(function(value, key) {
      var el= document.getElementById(key);
      if(el===null){ return };
      if(el.type==='radio' || el.type=='checkbox'){
        el.checked= value;
      }else{
        el.value= value;
      };
  }).then(cb).catch(function(err) {
      console.log(err);
  });
};

// set onchange listeners for all input and textarea elements
FormSync.prototype.listeners= function(){
  // select dropdowns
  var selects= document.getElementsByTagName('select')
  for (var selectIndex = 0; selectIndex < selects.length; ++selectIndex){
   selects[selectIndex].onchange= function(e){
      localforage.setItem(e.target.id, e.target.value).catch(function (err) {
        console.log(err);
      });
   };
  };
  // inputs / textareas
	var types= ['input', 'textarea'];
  for (var typeIndex = 0; typeIndex < types.length; ++typeIndex) {
   	var elements= document.getElementsByTagName(types[typeIndex]);
    for (var index = 0; index < elements.length; ++index) {
      if(elements[index].id===''||elements[index].type==='password'){ return };
      
      var sync= function(e){
         var input= e.target;
				 var val= null;
         console.log(input.type=='radio', input.type=='checkbox', input)
         if(input.type=='radio' || input.type=='checkbox'){
          val= input.checked;
         }else{
          val= e.target.value
         };
        localforage.setItem(e.target.id, val).catch(function (err) {
          console.log(err);
        });
      };
      elements[index].onkeyup= sync;
      elements[index].onchange= sync;
    };
  };
};

// clearAll
FormSync.prototype.clearAll= function(){
 console.log('clearAll');
 localForge.clear();
 return false;
};

// create FormSync instance
var formSync= new FormSync();

// initiate waterfall
var waterfall= function(){
  formSync.init(function(){
    formSync.checkLocal(function(){
      formSync.listeners();
    });
  });
};

if(document.readyState === "complete"){ 
  waterfall () 
}else{
  window.onload= waterfall();
};
