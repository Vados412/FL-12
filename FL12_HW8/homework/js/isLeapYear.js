function isLeapYear(data) {
  let convertdate = new Date(data);
  let year = convertdate.getFullYear();
  let rezult = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (rezult && !isNaN(convertdate)) {
    return `${year} is a leap year`;
  } else if (!rezult && !isNaN(convertdate)) {
    return `${year} is not a leap year`;
  } else if (isNaN(convertdate)) {
    return "Invalid Date";
  }
}
isLeapYear('1213131313');