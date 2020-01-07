const Li = require('./LinkedListNoKeys')
const _Node = require('./_Node')
function main (){


const SLL = new Li;
SLL.insertFirst(3)
SLL.insertLast(2)
SLL.insertLast(5)
SLL.insertLast(7)
SLL.insertLast(1)

//console.log(sort(SLL.head))
sort(SLL.head)
function sort (head){

if (head === null || head.next === null){
 return head;
}
let prev = null;
let slow = head;
let fast = head;

while (fast !== null && fast.next !== null){
 fast = fast.next.next; //3/5/7/1
 prev = slow;
 slow = slow.next; //2
 
}
prev.next = null;
const L1 = sort(fast)
console.log(L1)
const L2 = sort(slow)

//console.log(L2)
return merge(L1,L2);


}

function merge (L1,L2){
 const head = new _Node()
 let current = head;
//console.log(L1)

while(L1 !== null && L2 !== null){
if (L1.val < L2.val){
 current.next = L1;
 L1 = L1.next;
} else {
 current.next = L2;
 L2 = L2.next;
}

current = current.next;
}

current.next = (L1 === null) ? L2 : L1;
return head.next 
}

}
main()