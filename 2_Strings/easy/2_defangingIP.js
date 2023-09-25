/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
 */

function defangIPaddr(address) {
  return address.split(".").join("[.]");
}

console.log(defangIPaddr("0.00.00.00"));
