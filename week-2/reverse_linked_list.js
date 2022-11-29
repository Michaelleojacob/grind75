class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const logList = (list) => {
  let arr = [];
  while (list) {
    arr.push(list.val);
    if (list.next === null) arr.push("n");
    list = list.next;
  }
  return arr;
};

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
// console.log(list1);

var reverseList1 = function (head) {
  const storage = [];
  while (head) {
    storage.push(head.val);
    head = head.next;
  }
  const newList = new ListNode();
  let dummyhead = newList;
  while (storage.length) {
    dummyhead.next = new ListNode(storage.pop());
    dummyhead = dummyhead.next;
  }
  return newList.next;
};

const reverseList2 = (head) => {
  let tmp = null;
  let newHead = null;
  while (head) {
    console.log("__________new_round___________");
    tmp = head;
    console.log("tmp:", logList(tmp));
    head = head.next;
    tmp.next = newHead;
    console.log("tmp.next", logList(tmp));
    newHead = tmp;
    console.log("newHead:", logList(newHead));
  }
  return newHead;
};

//! with comments

/**
 * take the current value of head
 * WHILE iterating head = head.next
 *
 * START WITH NULL [null]
 *
 * head = [1,2,3,4,5]
 * current = 1
 *
 * get one by itself
 * val = 1, next = null OR previous
 * (temp.next = previous)
 *
 * [1] is now isolated
 *
 * add one to our new head
 *
 * newHead = [1, null]
 *
 * ------------------------------------------
 *
 * head = [2,3,4,5]
 *
 * isolate 2
 *
 * temp =  val: 2, next: null
 *
 * temp.next = previous
 *
 * [2] + [1,null]
 *
 * temp = [2,1,null]
 *
 * ------------------------------------------
 *
 * head = [3,4,5]
 *
 * isolate 3
 *
 * temp = val: 3, next: null
 *
 * temp.next = previous
 *
 * [3] + [2,1,null]
 *
 * temp = [3,2,1,null]
 *
 * newHead = temp
 *
 */

const reverseList3 = (head) => {
  let temp = null;
  let newHead = null;
  while (head) {
    //tmp = the whole head [1,2,3,4,5, null]
    temp = head;
    //move head up
    head = head.next;
    /**
     * kill remainer and combine with our previous (previous = newHead)
     * kill the remainder of tmp [1,2,3,4,5,null] -> [1 next: newHead] -> [1, null]
     * 2nd round temp [2,3,4,5] -> [2, next: newHead] -> newHead: [1,null] -> [2,1,null]
     */
    temp.next = newHead;
    /**
     * store our current reversed list in newHead.
     * initially [null]
     * [1, null]
     * [2,1,null] ...etc
     */
    newHead = temp;
  }
  return newHead;
};

var reverseList4 = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
