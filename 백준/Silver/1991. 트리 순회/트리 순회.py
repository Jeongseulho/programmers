


def preOrder(node):
    if node in treeDict.keys():
        print(node, end='')
        preOrder(treeDict[node][0])
        preOrder(treeDict[node][1])


def inOrder(node):
    if node in treeDict.keys():
        inOrder(treeDict[node][0])
        print(node, end='')
        inOrder(treeDict[node][1])


def postOrder(node):
    if node in treeDict.keys():
        postOrder(treeDict[node][0])
        postOrder(treeDict[node][1])
        print(node, end='')


N = int(input())
treeDict = dict()
for _ in range(N):
    parent, leftChild, rightChild = input().split()
    treeDict[parent] = [leftChild, rightChild]

preOrder('A')
print()
inOrder('A')
print()
postOrder('A')
