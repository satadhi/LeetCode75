/**
* Q: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
*/

var lowestCommonAncestor = function (root, p, q) {

    function helper(node, p, q) {
        if (!node)
            return { noN: 0, anc: undefined };

        let leftNode = helper(node.left, p, q);
        if (leftNode.noN === 2)
            return leftNode;

        let rightNode = helper(node.right, p, q);
        if (rightNode.noN === 2)
            return rightNode;

        let no = rightNode.noN + leftNode.noN;
        no += (node === p || node === q) ? 1 : 0;

        return { noN: no, anc: no === 2 ? node : undefined };
    }

    return helper(root, p, q).anc;
};
