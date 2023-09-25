﻿/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 */

const reverseWords = (s) => {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};
