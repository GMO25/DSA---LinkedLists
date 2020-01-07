class _Node  {
 constructor(value,next,key){
  this.value = value;
  this.next = next;
  this.key = key;
 }
}

class LinkedList {
 constructor(){
  this.head = null;
 }
 updateKeys(){

 }

 insertBefore(node,item,key){
  
  let nodeAfter = this.find(node) // 'Node name' e.g. Boomer
  let currNode = this.head; // 'current head' e.g. Apollo
  
   while(currNode.key !== nodeAfter.key - 1){ // Apollo.key !== Boomer.key - 1 
    currNode = currNode.next  // Apollo = Boomer

   }
   if(currNode.key == nodeAfter.key - 1){ // if Apollo.key == Boomer.key - 1 
    currNode.next = new _Node(item,nodeAfter,key) // Apollo.next = newNode 
     
     // increment all nodeAfter.next.key by 1 
    // variable that represents all next keys
 
   // Apollo < Boomer = yes leave it and increment to athena 
   // athena key = boomer.key Yes - ok icrement boomer
   //increment athena to boomer and increment boomer to helo
   // now does Boomer.key < Helo.key no - it equals yes ok heloKey ++ 
    while(currNode.key < nodeAfter.key){
      currNode = currNode.next
      }
   
     while(currNode.key == nodeAfter.key){   
        
         nodeAfter.key ++ 
         currNode = currNode.next       
         nodeAfter = nodeAfter.next
       
       if(nodeAfter === null){
          break;
       }
      }

    }
    
  
 }
 insertAfter(node,item,key){
  let nodeBefore = this.find(node) // 'Node object'
  //console.log(nodeBefore)
  nodeBefore.next = new _Node(item,nodeBefore.next,key)
  // Ok if we add a hotdog 4 after helo 3 need to increment all of the nodes of new node.next
  let currNode = this.find(item) // hotdog.key // pizza
  let nodeAfter = this.find(item).next // husker.key  // hotdog
  while(currNode.key < nodeAfter.key){
   currNode = currNode.next
   }

  while(currNode.key == nodeAfter.key){   
     
      nodeAfter.key ++ 
      currNode = currNode.next       
      nodeAfter = nodeAfter.next
    
    if(nodeAfter === null){
       break;
    }
   }

 


 }
 insertAt(key,item,nextKey){
  let currNode = this.head 
  while (currNode.key !== key){
   currNode = currNode.next
  }
  if (currNode.key == key){
   currNode.next = new _Node(item,currNode.next,nextKey)
   // again if the newItem is 4 need to make item.next 5 and item.next.next 6
   let currentNode = this.find(item) // Cat
  let nodeAfter = this.find(item).next  // Hotdog
  while(currNode.key < nodeAfter.key){
   currNode = currNode.next
   }

  while(currNode.key == nodeAfter.key){   
     
      nodeAfter.key ++ 
      currNode = currNode.next       
      nodeAfter = nodeAfter.next
    
    if(nodeAfter === null){
       break;
    }
   }

 

 }
}



 insertFirst(item,key){
  this.head = new _Node(item,this.head,key);
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
 let SLL = new LinkedList
 SLL.insertFirst('Apollo',1)
 SLL.insertLast('Boomer',2)
 SLL.insertLast('Helo',3)
 SLL.insertLast('Husker',4)
 SLL.insertLast('Starbuck',5)
 SLL.insertLast('Tauhida',6)
 SLL.remove('Tauhida')
 SLL.insertBefore('Boomer','Athena',2) // ONlY need 2 values here no key.
 // Key given must be correct order e.g. replacement of boomer so 2
 SLL.insertAfter('Helo','Hotdog',5)
 SLL.insertAt(3,'Cat',4) // Cat has to be 4 
 let output = SLL.head 

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
 function findPrevious(node){
  let nodeAfter =  SLL.find(node)
  let currNode = SLL.head

  while (currNode.key < nodeAfter.key -1){
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
  const regex = /key/gi
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