import { nanoid } from "nanoid";
import { log } from "node:console";


export function isasin(list,value){
    let fleg = false;
    list.forEach(num => {
        if(num.id===value){
            console.log(num.id);
            fleg = true
        }    
    });
    return fleg 
}

export function asall(val){
        if (val == null || typeof val !== 'object') {
        console.error("Error: Input is not a valid object:", val);
        return true;} // או החזר false, תלוי בהיגיון העסקי שלך כשיש קלט לא תקין
    if (!('text' in val)) return true
    if (!('weapon' in val)) return true
    return false
}

export function addid(val){
    if (!('id' in val)){val.id = nanoid()}
    if ((val.id == false) || (typeof(val.id) !== 'string' &&  typeof(val.id) !== 'number')){val.id = nanoid()}   
}

export function addname(val){
    if (!('id' in val)){val.name_t = "Muhammad"}
    if( val.name_t == false||typeof(val.name_t) !== 'string'){val.name_t = "Muhammad"}   
}

export function valuisnotempty(val){
    if (typeof(val.id) == 'number')
        val.id = String(val.id)
    if(typeof(val.id) == 'string'&& val.id !== "" 
    && typeof(val.name_t) == 'string'&& val.name_t !== ""
     && typeof(val.text) == 'string'&& val.text !== ""
      && typeof(val.weapon) == 'object'&& val.weapon !== ""){
        return false
    }     
    return true
}

export function sortdefult(list){
    return list.toSorted(function(a,b){return a.id - b.id})
}

export function sortdyvalue(list,value){
    const val = value
    return list.toSorted((a, b) => a[val].localeCompare(b[val]));
}

export function searchbyvalue(list,value){
    const found = list.findIndex(val => val.id === value);
    if (found!==-1){
        return list[found]}
    else{
        console.log(`לא קיים הערך המבוקש`); 
        return list }  
}

export function deletebyvalue(list,value){
    const found = list.findIndex(val => val.id === value);
    if (found!==-1){
        list.splice(found,1);
        return list;}
    else{
        console.log(`לא קיים הערך המבוקש`); 
        return list     
    }
}

export function updat(list,index_id,title,value){
    const found = list.findIndex(val => val.id === index_id);
    if (found!==-1){
        list[found][title]=value;
        return list;}
    else{ 
        return  `לא קיים הערך המבוקש`   
    }   
}


