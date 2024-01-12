/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */

var mergeKLists = function(lists) {
    
  const queue = new MinPriorityQueue({ priority: x => x.val });

    for (const head of lists) {
        if(head) {
            queue.enqueue(head)
        }
    }

    let result = new ListNode();
    const head = result;

    while(!queue.isEmpty()) {
        const {val, next} = queue.dequeue().element;

        result.next = new ListNode(val)
        result = result.next;

        if(next) {
            queue.enqueue(next)
        }      
    }
    return head.next
};
