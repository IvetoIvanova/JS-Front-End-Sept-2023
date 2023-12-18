function getMeetingsInfo (arrayOfStrings){
    const meetings = {};

    for (const element of arrayOfStrings) {
        const [day, name] = element.split(" ");
        if(!meetings.hasOwnProperty(day)){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    Object.keys(meetings).forEach(day => {
        console.log(`${day} -> ${meetings[day]}`);
    })
}

getMeetingsInfo(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

getMeetingsInfo(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);