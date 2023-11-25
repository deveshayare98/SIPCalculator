function ConvertNumberToWord(number) {
  if (number < 100000) {
    const Thousand = number / 1000;
    return `₹ ${Thousand.toFixed(0)} K`;
  } else 
  if (number < 10000000) {
    const lakh = number / 100000;
    return `₹ ${lakh.toFixed(0)} L`;
  } else if (number < 1000000000) {
    const crore = number / 10000000;
    return `₹ ${crore.toFixed(0)} Cr`;
  } else {
    return `₹ ${number}`;
  }
}

export default ConvertNumberToWord;
