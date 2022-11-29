class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergeSort = (list1, list2) => {
  let arr = [];
  while (list1) {
    arr.push(list1.val);
    list1 = list1.next;
  }
  while (list2) {
    arr.push(list2.val);
    list2 = list2.next;
  }
  arr = arr.sort((a, b) => a - b);
  const head = new ListNode();
  let current = head;
  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head.next;
};

console.log(mergeSort(list1, list2));
