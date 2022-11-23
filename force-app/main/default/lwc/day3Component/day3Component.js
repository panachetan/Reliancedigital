import { LightningElement } from 'lwc';

export default class Day3Component extends LightningElement {


Firstname = 'chetan mukund jogi'

myMethod1(){
console.log(this.myMethod2);

}

get myMethod2(){

return 'chetan'

}

getfirstname(){

console.log(this.Firstname)
}

}