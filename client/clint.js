import input from 'analiza-sync';
import {intels} from "../db/intels.js"

import {add,show,shoebyvalye,search,delet,updatbytitle} from "../services/intel.services.js"
// const name = input('Name: ');
// const num = -1
while(true){
    const numString = input('0 = Exit ,1 =add ,2 = show ,3 = shoebyvalye ,4 = search ,5 = delet ,6 = updatbytitle')
    let num = -1
    try{
    num = parseInt(numString);}
    catch{console.log(`ערך לא תקין`);
    }
    if (num === 0)
         break;
    let value = "" 
    let index = ""
    let title = ""  
    switch(num){
        case 1:
            try{
            value = JSON.parse(input('And a box that you want to insert'))}
            catch{console.log(`Type as a standard Jason file`);
            }
            console.log(add(intels,value));
            break;
        case 2:
            console.log(show());
            break;
        case 3:
            value = input('מפתח שלפי זה נעשה את הסינון')
            console.log(shoebyvalye(intels,value));
            break;
        case 4:
            value = input('מזהה שלפי זה נעשה את החיפוש')
            console.log(search(intels,value));
            break;
        case 5:
            value = input('מזהה שלפי זה נעשה את המחיקה')
            console.log(delet(intels,value));
            break;
        case 6:
            index = input('מזהה שלפי זה נעשה את העדכון')
            title = input('מפתח ששם נעשה את העדכון')
            value = input('ערך שנשים במפתח')
            console.log(updatbytitle(intels,index,title,value));
            break;
        default:
            break;
    }
}


