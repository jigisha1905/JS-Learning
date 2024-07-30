/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month=3 //it can used for string too
switch (month) {
    case 1:
        console.log("jan")
        break; //why break?all statements after getting matched will execute if we don't use break
    case 2:
        console.log("feb")
        break;
    case 3: //3===3 so march gets printed
        console.log("march")
        break;
    default:
        console.log("default")
        break;
}
