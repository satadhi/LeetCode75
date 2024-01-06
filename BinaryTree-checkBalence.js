/**
 * Q: https://leetcode.com/problems/balanced-binary-tree/
 */

var isBalanced = function(root) {
    function checkBalance(node) {
        if (node === null) {
            return { isBal: true, height: -1};
        }

        let leftNodeCheck = checkBalance(node.left);
        if (!leftNodeCheck.isBal) {
            return { isBal: false, height: 0 };
        }

        let rightNodeCheck = checkBalance(node.right);
        if (!rightNodeCheck.isBal) {
            return { isBal: false, height: 0 };
        }

        let isBalanced = Math.abs(rightNodeCheck.height - leftNodeCheck.height) <= 1;
        let height = Math.max(rightNodeCheck.height, leftNodeCheck.height) + 1;

        return { isBal: isBalanced, height: height };
    }

    return checkBalance(root).isBal;
};
