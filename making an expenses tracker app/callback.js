const posts=[
    {title:'post one',body:'this is the post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is the post two',createdAt:new Date().getTime()}
];
let intervalid=0;
function getpost(){
    clearInterval(intervalid);
   intervalid= setInterval( ()=> {
    setTimeout( () =>{
        
        let output=' ';
        posts.forEach( (post ,index) =>{
            console.log('initializ');
output += `<li> ${post.title} ,${post.body} . last update - ${(new Date().getTime()-post.createdAt)/1000}</li>`

        } );
        document.body.innerHTML=output;},1000)
    },1000);
   
}
getpost();

function createpost(post,callback2){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        console.log('fetch');
        callback2();
        
    },3000);
}


function create4thpost(post,callback){
    setTimeout(() =>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
        
    },5000);

}
createpost({title:'post three',body:'this is the post third'},getpost);

create4thpost({title:'post four',body:'this is the post fourth'},getpost);