'use strict';
let arry=[];
function get_reapot_num(colllection) {
    if(arry.indexOf(colllection)===-1){
        arry.push(colllection);
        return colllection;
    }
}
let x=[1,1,1,1,2,2,3,3,4].filter(get_reapot_num);
console.log(x);
