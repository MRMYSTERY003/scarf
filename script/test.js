import {onValue,set, od, hu, li } from "./fbase.js";


var myGauge = Gauge(document.getElementById("od"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 77,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return val.toPrecision(4);} // returns a string label that will be rendered in the center
});

var myGauge2 = Gauge(document.getElementById("hu"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 30,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return  val.toPrecision(4);} // returns a string label that will be rendered in the center
});

var myGauge3 = Gauge(document.getElementById("li"),{
    dialRadius: 40,
    dialStartAngle: 135,
    dialEndAngle: 45,
    value: 50,
    max: 100,
    min: 0,
    valueDialClass: "value",
    valueClass: "value-text",
    dialClass: "dial",
    gaugeClass: "gauge",
    showValue: true,
    gaugeColor: null,
    label: function(val) {return val.toPrecision(4);} // returns a string label that will be rendered in the center
});


function readvalue(db_path){

    if(db_path == od){
        onValue(db_path, (snapshot) => {
            let val= snapshot.val();
            console.log(val)
            myGauge.setValueAnimated(val, 1);
        });
    }else if(db_path == li){
        onValue(db_path, (snapshot) => {
            let val= snapshot.val();
            console.log(val)
            myGauge3.setValueAnimated(val, 1);
        });
    }else{
        onValue(db_path, (snapshot) => {
            let val= snapshot.val();
            console.log(val)
            myGauge2.setValueAnimated(val, 1);
        });
    }


}

readvalue(od)
readvalue(li)
readvalue(hu)



