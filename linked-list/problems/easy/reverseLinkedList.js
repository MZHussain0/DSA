/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  while (current) {
    const next = head.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}
console.log(reverseLinkedList([1, 2, 3, 4, 5]));

function reverseLinkedListRecursive(head) {
  if (!head || !head.next) return head;
}
console.log(reverseLinkedListRecursive([1, 2, 3, 4, 5]));
