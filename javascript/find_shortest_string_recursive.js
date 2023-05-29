function findShortestStringRecursive(arr) {
  if (arr.length === 1) return arr[0]
  if (arr[0].length <= arr[1]. length) return findShortestStringRecursive([arr[0],...arr.slice(2)])
  if (arr[0].length > arr[1]. length) return findShortestStringRecursive(arr.slice(1))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
