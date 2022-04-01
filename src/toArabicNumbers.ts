import { fromArabicHash } from "./utils/fromArabicHash";
import { toArabicHash } from "./utils/toArabicHash";

const arabicDigits = /[٠-٩]/gu;
const notEngishDigits = /[^0-9]/gu;
const notArabicDigits = /[^٠-٩]/gu;

/**
 * @param num a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */
const toArabicDigit = (num: string | number, intOnly?: boolean): string => {
  let intStatus = intOnly;
  let currentNum = num;

  if (intStatus === void 0 || !intStatus) {
    intStatus = false;
  }
  if (intStatus) {
    currentNum = String(currentNum).replace(notEngishDigits, "");
  }

  // Split the num into an array of digits, then use toArabicHash to convert each digit to arabic
  return [...String(currentNum)]
    .map((digit) => {
      if (toArabicHash[digit]) {
        return toArabicHash[digit];
      }
      return digit;
    })
    .join("");
};

/**
 * @param num a string that contain the number to be converted
 * @param intOnly remove any character that is not a digit
 */

const fromArabicDigit = (
  num: string | number,
  intOnly?: boolean,
): string | number => {
  let intStatus = intOnly;
  let currentNum = num;

  if (intStatus === void 0 || !intStatus) {
    intStatus = false;
  }
  if (intStatus) {
    currentNum = String(currentNum).replace(notArabicDigits, "");
  }

  // split it into array on digits, then use fromArabicHash to convert each digit to arabic
  const res = [...String(currentNum)]
    .map((digit) => {
      if (fromArabicHash[digit]) {
        return fromArabicHash[digit];
      }
      return digit;
    })
    .join("");

  // check if res is of type number, if yes, parseFloat it and return
  if (Number.isNaN(Number(res))) {
    return res;
  }
  return Number.parseFloat(res);
};

/**
 * @param num a string that contain the number to be tested
 */
const hasArabicDigit = (num: string): boolean => {
  return num.toString().match(arabicDigits) !== null;
};

export { fromArabicDigit, hasArabicDigit, toArabicDigit };
