var Varsity = {
    admission : 100,
    student : 200,
    group : 3,
    teachers : 20
}

/* var key = Object.keys(Varsity)
for (i = 0 ; i<key.length ;i++){
    var str = key[i];
    var man = Varsity[str];
    console.log(str,man);
} */

for(key in Varsity){
    value = Varsity[key];
 console.log(key,'=', value)

}