/*-------for in loop-------*/
const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myobj) {
    //console.log(myobj[key])
    //console.log(key)
    console.log(`${key} shortcut is for ${myobj}`)
}

//for in loops on arrays
const prog=["js","cpp","py","java"]
for (const key in prog) {
    //console.log(key)
    console.log(prog[key])
}

//map is not iteratable (so can't use for in loop)
