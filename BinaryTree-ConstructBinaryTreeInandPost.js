/**
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */

var buildTree = function(inorder, postorder) {
    
    if (!inorder.length || !postorder.length)
        return null;
    let mid = inorder.indexOf(postorder.at(-1))
    console.log(mid)
    let root = new TreeNode(postorder.at(-1));
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    root.right = buildTree(inorder.slice(mid+1), postorder.slice(mid, postorder.length -1))
    return root

};
