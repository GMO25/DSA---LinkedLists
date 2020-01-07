class _Node  {
 constructor(value,next,key){
  this.value = value;
  this.next = next;
 }
}

class LinkedList {
 constructor(){
  this.head = null;
 }

 insertBefore(node,item){
  
  let nodeAfter = this.find(node) //Boomer
  let currNode = this.head; // Apollo
  
   while(currNode){ // ApolloNode.next == Boomer
     
   if(currNode.next == nodeAfter){ // if Apollo.next == Boomer - Yes
    currNode.next = new _Node(item,nodeAfter) // Apollo.next = newNode 
    currNode = currNode.next
    }
    currNode = currNode.next // node 1,2,3,4,5
  }
  
 }
 insertAfter(node,item){
  let nodeBefore = this.find(node) 
  
  nodeBefore.next = new _Node(item,nodeBefore.next)
 
  let currNode = this.find(item) // hotdog.key // pizza
  let nodeAfter = this.find(item).next // husker.key  // hotdog
  while(currNode.key < nodeAfter){
   currNode = currNode.next
   }

 
 


 }
 insertAt(position,item){
  let currNode = this.head 
  let count = 0
  while (currNode){
    count ++ 
   currNode = currNode.next
  
  if (count == position - 1){
   currNode.next = new _Node(item,currNode.next)
   currNode = currNode.next
  }
 }

}



 insertFirst(item){
  this.head = new _Node(item,this.head);
 }
 insertLast(item,key){
  if(this.head === null){
   this.insertFirst(item,key);
  } else {
   let tempNode = this.head;
   while(tempNode.next !== null){
    tempNode = tempNode.next;
   }
   tempNode.next = new _Node(item,null,key)
  }
 }
 find(item){
  let currNode = this.head;
  if(!this.head){
   return null;
  }
  while(currNode.value !== item){
   if(currNode.next === null){
    return null;
   }
   else {
    currNode = currNode.next;
   }
  }
  return currNode;
 }
 remove(item){
  if(!this.head){
   return null;
  }
  if (this.head.value === item){
   this.head = this.head.next;
   return
  }
  let currNode = this.head;
  let previousNode = this.head;
  while((currNode !== null) && (currNode.value !== item)){
   previousNode = currNode;
   currNode = currNode.next;
  }
  if(currNode === null){
   console.log('Item not found')
   return;
  }
  previousNode.next = currNode.next;
 }
}


function main (){

//1) Create a singly linked list + methods 
 let SLL = new LinkedList
 SLL.insertFirst('Apollo')
 SLL.insertLast('Boomer')
 SLL.insertLast('Helo')
 SLL.insertLast('Husker')
 SLL.insertLast('Starbuck',5)
 SLL.insertLast('Tauhida',6)
 SLL.remove('Tauhida')
 SLL.insertBefore('Boomer','Athena') 
 SLL.insertAfter('Helo','Hotdog')
 SLL.insertAt(3,'Kat') 
 let output = SLL.head 
 console.log(output.next)


 //ADDITIONAL FUNCTIONS 
 //1) Display
 console.log('Display:'+ JSON.stringify(output))
 //2) Size
 size(JSON.stringify(output))
 //3) Empty
 isEmpty(output)
 // FIND CALLS
 console.log(findPrevious('Boomer'))
 console.log(findLast())
 //4) Find Previous
 function findPrevious(node){ //finds the node before the item ur looking for 
  let nodeAfter =  SLL.find(node)
  let currNode = SLL.head

  while (currNode.next !== nodeAfter){
    currNode = currNode.next
  }
  return currNode 
 }
 //5) Find Last 
function findLast(){
  let currNode = SLL.head 
  while(currNode.next !== null){
    currNode = currNode.next
  }
  return currNode
  }
}

function display(){
  main()
}
function size (input){
  const regex = /value/gi
  const result =  input.match(regex)
  console.log('size:' + result.length)
}

function isEmpty(input){
  if (input === null){
    console.log('Empty')
  }
}



//display()



module.exports = LinkedList


//Linked Lists probably come up in Interview 