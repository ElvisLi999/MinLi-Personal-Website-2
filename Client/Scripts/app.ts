/* 
   Author: Min Li
   Student ID: 301130589
   Date: Sept 25, 2021 

   Filename: app.ts
*/



(function(){

    function confirmDelete()
    {
      // confirm deletion
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/contacts-list';
        }       
      });
    }

    function start() 
    {
        console.log("App started...");
        confirmDelete();  
    }

    window.addEventListener("load", start);
})();