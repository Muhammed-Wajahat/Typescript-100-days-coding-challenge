//🚀 Day 40 Challenge: Start Coding! 🚀
//Question 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  //Question 2
  let counter = 10;
  while (counter > 0) {
    if (counter === 5) {
      break;
    }
    console.log("Hello World");
    counter--;
  }
  //Question 3
  function getStr(str: string) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`first vowel found: "${char}"`);
        break;
      }
    }
  }
  getStr("Wajahat Ali");