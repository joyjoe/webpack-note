import modA from "./module/modA";
import $ from "jquery";

export default () => {
    console.log($);
    console.log(`pageA use modA, modA() = ${modA()}`);
}
