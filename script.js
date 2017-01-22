

window.onload=function(){
  var cat_count=0;
  var punchy = document.getElementById('punchy');
  var pillow = document.getElementById('pillow');
  var snoop =  document.getElementById('snoop');
  var pillow_flag=false,punchy_flag=false,snoop_flag=false;
  pillow.addEventListener('click',function(){
    introduceMe("Pillow");
    if(!pillow_flag){cat_count++; pillow_flag=true;}
  });

  punchy.addEventListener('click',function(){
    introduceMe("Punchy");
    if(!punchy_flag){cat_count++; pillow_flag=true;}
  });

  snoop.addEventListener('click',function(){
    introduceMe("Snoop Cat");
    if(!snoop_flag){cat_count++; pillow_flag=true;}
  });

  function introduceMe(name){
    alert("Hi I'm "+name+"!");
    console.log('cat count:',cat_count);
  //  pillow.nextSibling().innerHTML="Hi I'm pillow";
  }


  //add event listeners - broken
  //
  //have them remove the cats


//have all three cats disappear using the event listener and then show end msg
};
