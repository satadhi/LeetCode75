/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 */
var buildTree = function(preorder, inorder) {

  if( !preorder.length  || !inorder.length)
    return null ;

    let mid = preorder[0]
    let index = inorder.indexOf(mid)
    let root = new TreeNode(mid);

    // console.log(mid, index, root , preorder.slice(1, preorder.length), inorder.slice(0,index), inorder.slice(index+1, inorder.length))
    root.left = buildTree(preorder.slice(1, index +1), inorder.slice(0,index))
    root.right = buildTree(preorder.slice(index +1, preorder.length), inorder.slice(index+1))

    return root
};
