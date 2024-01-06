/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */

var sumNumbers = function(r0, partialSum = 0) {

    let totalSum = 0;
    function preorder(root, parSum) {

        if(!root) {
            return; 
        }
        
        parSum = parSum* 10 + root.val;

        // leaf node
        if(root.left === null && root.right === null) {
            totalSum += parSum;
            return;
        }

        preorder(root.left, parSum);
        preorder(root.right, parSum);
    }

    preorder(r0, 0);

    return totalSum;
    
};
