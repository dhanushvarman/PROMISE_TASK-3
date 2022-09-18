var div=document.createElement("div");
div.setAttribute("id","div");

var h1=document.createElement("h1");
h1.innerHTML="PROMISE TASK-BEERS";
h1.style.textAlign="center";
h1.style.marginBottom="50px";
h1.style.marginTop="50px";
h1.style.backgroundColor="orange";

var container=document.createElement("div");
container.classList.add("container");
container.setAttribute("id","container");

var row=document.createElement("div");
row.setAttribute("id","row");
row.classList.add("row");

container.append(row);
div.append(container);
document.body.append(h1,div);
document.body.style.backgroundColor="lightblue";

function foo(){
        var res=new Promise((reslove,reject)=>{
        reslove("https://api.punkapi.com/v2/beers");
    }).then((data)=>{
        res1(data)
    }).catch((error)=>console.log(error));
}
foo();

async function res1(value){
    var url=await fetch(value);
    var result=await url.json();
    console.log(result);
    for(var i=0;i<=24;i++)
    {
        row.innerHTML+=`
        <div class="card" style="width: 20rem;margin-left:30px;margin-bottom:20px;">
            <img src="${result[i].image_url}" class="card-img-top" style="height:200px;width:">
            <div class="card-body" style="text-align:justify;">
                <h6><b>ID:</b> ${result[i].id}</h6>
                <h6><b>BEER NAME:</b> ${result[i].name}</h6>
                <h6><b>DESCRIPTION:</b> ${result[i].description}</h6>
                <h6><b>ABV:</b> ${result[i].abv}</h6>
                <h6><b>FOOD PAIRING:</b>
                <div>(i)${result[i].food_pairing[0]}</div>
                <div>(ii)${result[i].food_pairing[1]}</div>
                <div>(iii)${result[i].food_pairing[2]}</div></h6>
                <h6><b>BREWER TIPS:</b> ${result[i].brewers_tips}</h6>
            </div>
        </div>`;
    }
}


