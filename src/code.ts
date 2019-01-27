
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
function avneiDerekh(times:number) {
    interface iAvanim {
        [key: number]:Function;
    }
    let avanim:iAvanim = {
        '10': ()=> `Akhi! Pa'am Asiit kvar!`,
        '20': ()=> `Akhi! Pa'am Esrim kvar!!!`,
        '30': ()=> `Akhi! Pa'am Shloshim! tistakel al hadadf kvar!!!`
    }
    return avanim.hasOwnProperty(times)? avanim[times]() : "";
};

Observable.create((observer:any)=>{
    observer.next("yo! i'm the 1st");
    let i = 0;
    setInterval(()=>{
        i++;
        observer.next(`kvar khafarti lekha ${i} pe'emim`, i);
    },1000)
})
    .map((x:String, times:number)=>`${avneiDerekh(times)} ${x.toUpperCase()}`)
    .subscribe((data:any)=> addItem(data))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

