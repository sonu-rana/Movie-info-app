    
    
    $(document).ready(function(){
        let input=$('#inp')   
        let button=$('#btn')
        let result=$('#dat')
       
        
        $("input[type='text']").keypress(function(event){
            
          if(event.which==13){
             //  alert("haha")
             var data=input.val();
             console.log(data); 
           
             button.click(function(){
                var data=input.val();
                console.log(data); 
                      makeRequest(data);
                     // console.log(input);
               })
         
          makeRequest(data);
              // console.log(input);
        }})
        
    
    function  makeRequest(data)  {
                $.ajax({
                         url:'http://www.omdbapi.com?s='+ data+'&apikey=thewdb' , 
                         method:'GET',
                         success:function(data){
                             console.log(data)
                           //  var string=JSON.stringify(data);
                             //console.log(string);
                             console.log(data.Search)
                             let output='';
                            // result.append(`${data.Search[0].Title}`)
                             data.Search.forEach(movie => {
                               output  +=`
                               <div class="col-md-3">
                               <div class= "well text-center" >  
                               <img src=${movie.Poster}> 
                               <h5>${movie.Title}</h5> 
                               <a onclick="movieSelected('${movie.imdbID}')"  class="btn btn-primary" href="movie.html">MOVIE DETAILS</a>
 
                               </div>
                               </div>
                                `
                           result.html(output);
 
                         }
                           
                          )}
                         })
                     }
                     }
                 )
                 function movieSelected (id){
                     console.log(id);
                     sessionStorage.setItem('movieid',id)
                 
                     }
                     
 
                     function  getMovie()  {
 
                         let movid=sessionStorage.getItem('movieid');
                     
                         $.ajax({
                                  url:'http://www.omdbapi.com?i='+ movid+'&apikey=thewdb' , 
                                  method:'GET',
                                  success:function(data){
                                     
                                      console.log(data)
                                      let out='';
                                      out +=`
                                         <div class="row">
                                              <div class="col-md-4">
                                                <img src=${data.Poster}>
                                              </div> 
                                               <div class="col-md-8">
                                                   <h2>${data.Title}<h2>
                                                   <ul class="list-group">
                                                     <li class="list-group-item">${data.Genre}</li>
                                                     <li class="list-group-item">${data.Released}</li>
                                                     <li class="list-group-item">${data.imdbRating}</li>
                                                     <li class="list-group-item">${data.Writer}</li>
                                                     <li class="list-group-item">${data.Director}</li>
                                                     <li class="list-group-item">${data.Actors}</li>
                                                     <li class="list-group-item">${data.Rated}</li>
                                                   </ul>
                                              </div> 
                                          </div>                              
                                      `       
                                      $('#d').html(out);                         
                                      
 
                                      
                                  }
                                  
                                 })
                             }
                                    
                                                                    
                              
                              
                          
                                  