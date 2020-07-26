// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s){
  let result="";
  for(let i=0;i<s.length;i++){
     result+='-'+gen(s[i],i);
  }
  return result.slice(1);
}
function gen(char,rep){
  let result=char.toUpperCase();
  for(let i=0;i<rep;i++){
    result+=char.toLowerCase();
  }
  return result;
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));