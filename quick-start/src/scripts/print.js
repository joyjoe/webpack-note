export default function f() {
    console.log("I get called from 'print.js'");
}

export function a(){
    console.log("this is method a in print.js");
}

export function b(){
    function ib(){
        console.log("this is method ib");
    };
    ib();
    console.log("this is method b in print.js");
};
