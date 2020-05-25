const BinaryTree = require('./BinarySearchTree');

const tree = new BinaryTree();
tree.insert(66);
tree.insert(31);
tree.insert(15);
tree.insert(35);
tree.insert(84);
tree.insert(76);
tree.insert(110);

console.log(JSON.stringify(tree.root));

//       66
//   31      84
// 15  35  76  110

tree.remove(84);

console.log(JSON.stringify(tree.root));

//       66
//   31      110
// 15  35   76  