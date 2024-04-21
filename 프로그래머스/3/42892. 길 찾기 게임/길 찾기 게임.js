class BST {
  constructor(index, xPos) {
    this.index = index;
    this.xPos = xPos;
    this.left = null;
    this.right = null;
  }

  insert(index, xPos) {
    xPos <= this.xPos ? this._toLeft(index, xPos) : this._toRight(index, xPos);
  }

  _toLeft(index, xPos) {
    this.left ? this.left.insert(index, xPos) : (this.left = new BST(index, xPos));
  }

  _toRight(index, xPos) {
    this.right ? this.right.insert(index, xPos) : (this.right = new BST(index, xPos));
  }

  preOrder() {
    const result = [this.index];
    this.left && result.push(...this.left.preOrder());
    this.right && result.push(...this.right.preOrder());
    return result;
  }

  postOrder() {
    const result = [];
    this.left && result.push(...this.left.postOrder());
    this.right && result.push(...this.right.postOrder());
    result.push(this.index);
    return result;
  }
}



function solution(nodeinfo) {
    let nodeWithIndex = nodeinfo.map((node, index) => [index + 1, node[0], node[1]]);
    let sortedNode = nodeWithIndex.sort((a, b) => b[2] - a[2]);
    
    const bst = new BST(sortedNode[0][0], sortedNode[0][1]);
    for (let i = 1; i < sortedNode.length; i++) {
        bst.insert(sortedNode[i][0], sortedNode[i][1]);
    }
    
    return [bst.preOrder(), bst.postOrder()]
}