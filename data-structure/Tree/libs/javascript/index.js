const TreeNode = require('./TreeNode');
const root = new TreeNode('root');
root.addChild(new TreeNode('child 0'));
root.addChild(new TreeNode('child 1'));
const children = root.getChildren();
for(let i = 0; i < children.length; i++) {
    for(let j = 0; j < 5; j++) {
        children[i].addChild(new TreeNode('second level child ' + j));
    }
}

children[0].addChild(new TreeNode('second level child 10'));

console.log(root);
root.preorder();
console.log('==================');
root.postorder();
