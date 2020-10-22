hpUrl=`http://hp-api.herokuapp.com/api/characters`;
const searchBtn=()=>{
    const typedName=document.getElementById('search-reads').value;
    
fetch(hpUrl)
.then(response=>response.json())
.then(data=>{
    
    let hpObj = data.find(hp =>typedName.toLowerCase()===hp.name.toLowerCase() );
    console.log(hpObj.name);

    document.querySelector('#image').src=hpObj.image;   
    document.querySelector("#name").innerHTML=hpObj.name;
    document.querySelector("#bDay").innerHTML=hpObj.dateOfBirth;
    document.querySelector("#eyeColor").innerHTML=hpObj.eyeColour;
    document.querySelector("#hairColor").innerHTML=hpObj.hairColour;
    document.querySelector("#gender").innerHTML=hpObj.gender;
    document.querySelector("#house").innerHTML=hpObj.house;
    document.querySelector("#ancestry").innerHTML=hpObj.ancestry;
    document.querySelector("#patronus").innerHTML=hpObj.patronus;
});
};
const viewAll=()=>{
fetch(hpUrl)
.then(response=>response.json())
.then(data=>{  
    console.log(data[1]); 
    console.log(data.length);
    //document.getElementById("view").style.display = "none";

    for(i=0; i<=data.length-1;i++){
    var newChar = document.getElementsByClassName('view-characters')[0];
    var viewChar = newChar.cloneNode(true);
    const viewAll=document.createElement('div');
    document.body.appendChild(viewAll);
    viewAll.appendChild(viewChar);

    document.querySelector('#image').src=data[i].image;   
    document.querySelector("#name").innerHTML=data[i].name;
    document.querySelector("#bDay").innerHTML=data[i].dateOfBirth;
    document.querySelector("#eyeColor").innerHTML=data[i].eyeColour;
    document.querySelector("#hairColor").innerHTML=data[i].hairColour;
    document.querySelector("#gender").innerHTML=data[i].gender;
    document.querySelector("#house").innerHTML=data[i].house;
    document.querySelector("#ancestry").innerHTML=data[i].ancestry;
    document.querySelector("#patronus").innerHTML=data[i].patronus;
    //document.body.appendChild(viewChar);
   
 }    

    /*
    const newDiv=document.createElement('div');
    newDiv.className='view-characters';
    const imgDiv=document.createElement('img');
    imgDiv.className='image';
    const newInfo=document.createElement('div');
    newInfo.className('hp-info');
    document.body.appendChild(newDiv);
    newDiv.appendChild(imgDiv);
    newDiv.appendChild(newInfo);

<<<<<<< HEAD
*/
});   
}
=======
//let hpObj = data.find(hp =>typedName.toLowerCase()===hp.name.toLowerCase() );
>>>>>>> d2c6d73600dd42e5034fa2b1941f9d4d48c27d1b
