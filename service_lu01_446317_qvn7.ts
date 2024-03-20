const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
26,34,23,73,21,36,50,69,12,27,97,71,40,53,42,24,89,52,75,22,39,68,54,60,50,87,71,89,33,78,14,80,47,78,69,19,96,43,50 * 19
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

grape


const getUniqueCharacters = str => Array.from(new Set(str)).join("");
function addNumbers(a, b) { return a + b; }
const isPalindrome = str => str === str.split("").reverse().join("");

30,28,87,58,83,71,51,33,38,84,36,7,28,27,27,70,13,45,62,41,74,4,18,45,45,32,19,51,13,73,38,79,7,3,6,39,81,76,11,29,23,48,88,60,34,37,97,5,30,44,63 - 64,19,97,32,74
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
94,99 / false
const getRandomSubset = (array, size) => array.slice(0, size);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomSubset = (array, size) => array.slice(0, size);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
