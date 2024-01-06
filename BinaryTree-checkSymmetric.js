/**
 * Q: https://leetcode.com/problems/symmetric-tree/
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    function check(r1, r2) {

        if (!r1 && !r2) {
            return true
        } else if(r1 && r2) {
            return (r1.val === r2.val && check(r1.left, r2.right) && check(r1.right, r2.left))
        } else {
            return false
        }
    }

    return check(root.left, root.right);
};