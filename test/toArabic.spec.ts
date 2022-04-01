import { describe, expect, it } from "vitest";
import { toArabicDigit } from "../src/toArabicNumbers";

describe("#1 toArabic test", () => {
  it(`1`, () => {
    expect(toArabicDigit(1, false)).toBe("١");
  });
  // 1234567890
  it(`1234567890`, () => {
    expect(toArabicDigit(1_234_567_890)).toBe("١٢٣٤٥٦٧٨٩٠");
  });

  it(`2`, () => {
    expect(toArabicDigit(2, false)).toBe("٢");
  });

  // Double digit numbers
  it(`11`, () => {
    expect(toArabicDigit(11, false)).toBe("١١");
  });

  it(`12`, () => {
    expect(toArabicDigit(12, false)).toBe("١٢");
  });

  // triple digit numbers random
  it(`111`, () => {
    expect(toArabicDigit(111, false)).toBe("١١١");
  });
  // triple digit starting with 9
  it(`999`, () => {
    expect(toArabicDigit(999, false)).toBe("٩٩٩");
  });

  // test with 9123
  it(`9123`, () => {
    expect(toArabicDigit(9123, false)).toBe("٩١٢٣");
  });
  // test with 2342342134
  it(`2342342134`, () => {
    expect(toArabicDigit(2_342_342_134, false)).toBe("٢٣٤٢٣٤٢١٣٤");
  });
  // test with abcd123123123 and set intOnly to true remove abcd
  it(`abcd123123123`, () => {
    expect(toArabicDigit("abcd123123123", true)).toBe("١٢٣١٢٣١٢٣");
  });

  // test with letters and space in middle
  it(`abcd 123 123 123`, () => {
    expect(toArabicDigit("abcd 123 123 123", true)).toBe("١٢٣١٢٣١٢٣");
  });

  // test with 6 digit negative numbers
  it(`-123456`, () => {
    expect(toArabicDigit(-123_456, false)).toBe("-١٢٣٤٥٦");
  });

  // test with a paragraph with numbers in between, intOnly to false
  const paragraphWithNumbers =
    `1 2 3 4 5 6 7 8 9 10 loream ipsum dolor s12323it am123123et, consectetasd123123ur adipiscin11g elit.`;
  it(`paragraphWithNumbers`, () => {
    expect(toArabicDigit(paragraphWithNumbers, false)).toBe(
      `١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠ loream ipsum dolor s١٢٣٢٣it am١٢٣١٢٣et, consectetasd١٢٣١٢٣ur adipiscin١١g elit.`,
    );
  });
});
