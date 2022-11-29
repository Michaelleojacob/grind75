"use strict";

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

const invertTree = (tree) => {
  let head = tree;
  if (head.left) invertTree(head.left);
  if (head.right) invertTree(head.right);
  let temp = head.left;
  head.left = head.right;
  head.right = temp;
  return head;
};

console.log(invertTree(tree));
