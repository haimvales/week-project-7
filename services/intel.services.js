


import { log } from "node:console";
import {intels} from "../db/intels.js"
import {isasin,asall,addid,addname,valuisnotempty,sortdefult,sortdyvalue,searchbyvalue,deletebyvalue,updat} from "../utils/functions.js"

console.log(intels);


export function add(list,value){
        // בודק אם יש לו את כל המפתחות
        if (asall(value))    
            return "חסר מפתח אחד הכנס את כל המפתחות";   

        //אם לא קיים ערך  שיוסיף איידי 
        addid(value);

        // אם חסר שם שישלים אוטומטי בפונקציה
        addname(value);

        // בודק אם כל המפתחות מלאים לפי הדרישות
        if (valuisnotempty(value))
            return "לא כל השדות מלאים כנדרש"

        // בודק אם עדיין אין כזה מזהה
         if(isasin(list,value.id))
            return "כבר יש כזה מזהה הקלד מזהה שונה";

         intels.push(value)
         return `נוסף המערך בהצלחה ${value}`

        //אוטומטי בלולאה אין סופית חוזר לתפריט
        console.log();
    }

export function show(list){
    // מציגה במיון לפי ID
    return sortdefult(list)
}

export function shoebyvalye(list,value){
    // מציגה וממיינת לפי ערך שמכניסים
    return sortdyvalue(list,value)
}

export function search(list,value){
    // מחפש ערכים לפי ID
    return searchbyvalue(list,value)
}

export function delet(list,value){
    // מוחק ערכים לפי ID
    return deletebyvalue(list,value)
}

export function updatbytitle(list,index_id,title,value){
    const arr_title = ['name_t','text']
    if (title in arr_title){     
        // משנה ערכים בתוך אובייקט של המערך במפתח שאני מביא לו
        return updat(list,index_id,title,value)}
    else if (title === weapon && value == 'object'){
        // משנה ערכים בתוך אובייקט של המערך במפתח שאני מביא לו
        return updat(list,index_id,title,value)}
    else {console.log(`שגיאה ערכים לא תקינים`);
    }
}





// updatbytitle(intels,'22','name_t','df')
// console.log(intels);
// console.log(delet(intels,'22'));
// console.log(add(intels,{weapon:[],text:"y",name_t:"",id:"123"}));
// console.log(intels);    
// console.log(show(intels));
// console.log(intels);    

// console.log(shoebyvalye(intels,'text'));

        














// console.log(asall({id:0}));
// console.log(isasin(intels,6));




