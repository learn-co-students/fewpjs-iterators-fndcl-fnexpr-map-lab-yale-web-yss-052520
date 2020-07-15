const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => titleCase(sentence))
}

function titleCase(str){
  let arr = str.split(' ')
  //console.log(arr)
  let newstr = arr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  //console.log(newstr)
  return newstr
}

console.log(titleCase("hey buddies it's me SID"))

console.log(titleCased())