import { onValue, te } from "./fbase.js";


const g_min = 0;
const g_max = 50;
let val = 34.6;

const arc = document.getElementById("temp");
const temperature = document.querySelector("#temperature");



function setvaluefortemp(){
    
    onValue(te, (snapshot) => {
        let val= snapshot.val();
        console.log(val)
        temperature.textContent = val;
        const arc_length = arc.getTotalLength();
        const step = arc_length / (g_max - g_min);
        const value = (val- g_min) * step;
        arc.style.strokeDasharray = `${value} ${arc_length - value}`;
    });

}



setvaluefortemp()
