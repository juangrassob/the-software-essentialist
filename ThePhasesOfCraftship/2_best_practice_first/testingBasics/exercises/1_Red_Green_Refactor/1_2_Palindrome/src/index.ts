export function palindromeChecker(text: string) {
  const normalicedText = text.toLowerCase().replace(/\s/g, "");
  const reverseNormaliced = normalicedText.split("").reverse().join("");

  if (normalicedText !== reverseNormaliced) {
    return false;
  }

  return true;
}
