import chalk from 'chalk';

const textToConvert = 'hello, chalk!';
const uppercasedText = textToConvert.toUpperCase();

console.log(chalk.blue('Original Text: ') + textToConvert);
console.log(chalk.green('Uppercased Text: ') + uppercasedText);
