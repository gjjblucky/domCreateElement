const posts=[
    {title:'post one',body:'this is the post one'},
    {title:'post two',body:'this is the post two'} 
];

function getpost(){
    setTimeout( () =>{
        let output=' ';
        posts.forEach( (post ,index) =>{
            console.log('initializ');
output += `<li> ${post.title} ,${post.body}</li>`
     } );
        document.body.innerHTML=output;
    },1000);
}
//for error false
function createpost(post){
    return  new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);
            
            const error= false;
                if(!error)
                {
                    resolve();
                }else
                {
                    reject('error:something went wrong');
                }
                
                
            
        },2000);
    
    }); 
   
}

function deletepost(post){
return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        posts.pop(post);
        
        const error= false;
            if(!error)
            {
                resolve();
            }else
            {
                reject('error:something went wrong');
            }
            
            
        
    },1000);
});



}


getpost();
createpost({title:'post three', body:'this is the post three'}).then(getpost);

deletepost().then(getpost);
//  
//for error true
// function createpost(post,callback){
//     return  new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             posts.push(post);
            
//             const error= true;
//                 if(!error)
//                 {
//                     resolve();
//                 }else
//                 {
//                     reject('error:something went wrong');
//                 }
                
                
            
//         },2000);
    
//     }); 
   
// }


// createpost({title:'post three', body:'this is the post three'})
// .then(getpost)
// .catch(err => console.log(err));
