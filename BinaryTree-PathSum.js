/**
 * https://leetcode.com/problems/path-sum/
 */

var hasPathSum = function(r0, targetSum) {
        function preorder(root, parSum) {

        if(!root) {
            return false; 
        }

        console.log(parSum)
        // leaf node
        if(root.left === null && root.right === null ) {
            return parSum === root.val;
        }

        return (
            preorder(root.right, parSum - root.val) || preorder(root.left, parSum - root.val)
        )

    }

    return preorder(r0, targetSum);

   
};
