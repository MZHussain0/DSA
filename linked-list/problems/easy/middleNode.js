/**
 * Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
 */

function middleNode(head) {
  let end = head;
  let half = head;
  while (end !== null && end.next !== null) {
    half = half.next;
    end = end.next.next;
  }
  return half;
}

console.log(middleNode([1, 2, 3, 4, 5]));
