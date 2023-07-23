function highlight() {
    //Write your code here

    const strong = document.getElementsByTagName('strong');
   
    for(let i=0; i<strong.length; i++)
    {
        strong[i].style.color ="green";
    }

   
}


function return_normal() {
    //Write your code here
    const strong = document.getElementsByTagName('strong');
   
    for(let i=0; i<strong.length; i++)
    {
        strong[i].style.color ="black";
    }
    
}

