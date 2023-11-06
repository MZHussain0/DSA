const string1 = "geeksforgeeks";
console.log(string1.length);

// Accessing characters
console.log(string1.charAt(0));
console.log(string1[0]);
console.log(string1.charCodeAt(0));
console.log(string1.replace("e", "gold"));
console.log(string1.replaceAll("e", "gold"));

// Concat a string
const str2 = "global";
console.log(string1.concat(" ", str2));

// Trim a string
const str3 = "  geeksforpeeks  ";
console.log(str3.trim());

//Searching
const str4 = "geeksforpeeks";
console.log(str4.search("e"));
console.log(str4.indexOf("e"));
console.log(str4.lastIndexOf("e"));
console.log(str4.includes("for"));
console.log(str4.startsWith("geeks"));
console.log(str4.endsWith("ks"));

// Substring
console.log(str4.substring(5, -1));
console.log(str4.slice(5, -1));

// converting case
const tobeConverted = { name: "geeksforpeeks" };
console.log(String(tobeConverted));
console.log(JSON.stringify(tobeConverted));

// String Comparison
const str5 = "geeks";
const str6 = "geeks";
console.log(str5.localeCompare(str6));

// splitting and joining strings
const str7 = "geeks for geeks";
console.log(str7.split(" "));
