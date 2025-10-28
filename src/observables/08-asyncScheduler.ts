import {asyncScheduler} from "rxjs";

// setTimeout(()=>{},3000)

const saludar = () => console.log('hola mundo');
const saludar1 = ({name}) => console.log(`hola ${name}`);

// asyncScheduler.schedule(saludar,2000)
// asyncScheduler.schedule(saludar1,2000, {name:'Pedro'})



const subs = asyncScheduler.schedule(function (state){
    console.log('state', state);
    this.schedule(++state,1500);
},1500,0)

// setInterval(()=>{
//     subs.unsubscribe();
// },6000)

asyncScheduler.schedule(()=> subs.unsubscribe(),6000)