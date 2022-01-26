const func1 = (Event) => {
    console.log(Event);
    console.log("keydown");
    eventKey.innerHTML = Event.key;
    eventCode.innerHTML = Event.code;
    eventWhich2.innerHTML = Event.which;
    eventWhich.innerHTML = Event.which;}
addEventListener("keydown", func1, false);