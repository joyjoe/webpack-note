import modA from "./module/modA";
import _ from "underscore";
import $ from "jquery";

export default () => {
    console.log(_);
    console.log(`pageB use modA, modA() = ${modA()}`);
}

console.log("_");
console.log(_);
console.log("$");
console.log($);
console.log(jQuery);
