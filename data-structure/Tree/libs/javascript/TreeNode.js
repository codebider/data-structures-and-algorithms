class TreeNode {
    constructor(value)
    {
        this.value = value;
        this.children = [];
        this.parent = null;
    }

    getValue() {
        return this.value;
    }

    setParent(node) {
        this.parent = node;
    }

    getParent() {
        return this.parent;
    }

    addChild(node) {
        node.setParent(this);
        this.children.push(node);
    }

    getChildren() {
        return this.children;
    }

    removeChildren() {
        this.children.length = 0;
    }

    preorder() {
        if(this.value !== null) {
            console.log(this.value);
            this.children.forEach(item => item.preorder());
        }
    }

    postorder() {
        if(this.value !== null) {
            this.children.forEach(item => item.postorder());
            console.log(this.value);
        }
    }
}

module.exports = TreeNode;
