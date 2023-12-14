function listOfNames(list){
    
    list.sort((a,b)=>{
        return a.localeCompare(b); //return b.localCompare(a);
    });

    let index = 1;
    for(const name of list){
        console.log(`${index}.${name}`);
        index++;
    }
    // console.log(list);
}

listOfNames(["John", "Bob", "Christina", "Ema"]);