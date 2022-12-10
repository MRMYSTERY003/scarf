import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onValue,get, push,query,limitToLast,child, update, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const firebaseConfig = {
apiKey: "AIzaSyDB3h4-wxfcVBMTEBwaZvXIUR1kMtrczEk",
authDomain: "scarf-9638f.firebaseapp.com",
databaseURL: "https://scarf-9638f-default-rtdb.firebaseio.com",
projectId: "scarf-9638f",
storageBucket: "scarf-9638f.appspot.com",
messagingSenderId: "612584907199",
appId: "1:612584907199:web:dd811720952c76b07fc10a"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();


console.log("started");


const od = ref(db, "optical dennsity");
const hu = ref(db, "humidity");
const li = ref(db, "light intensity");
const te = ref(db, "temperature");
const co2 = ref(db, "co2");
const co2_temp = ref(db, "co2_temp");




function setval(db_path, val){
    set(db_path, val).then(()=>{
        console.log("updated sucessfully....");
    }).catch((error) => {
        console.log(error);
    })
}



// set(co2, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);


export{onValue,set, od, hu, li, te, co2, co2_temp};