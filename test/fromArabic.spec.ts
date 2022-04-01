import { describe, expect, it } from "vitest";
import { fromArabicDigit, toArabicDigit } from "../src/toArabicNumbers";

describe("#1 fromArabic test", () => {
  // test with 1
  it(`1`, () => {
    expect(fromArabicDigit("١", false)).toBe(1);
  });
  // test with 2
  it(`2`, () => {
    expect(fromArabicDigit("٢", false)).toBe(2);
  });
  // test with 11
  it(`11`, () => {
    expect(fromArabicDigit("١١", false)).toBe(11);
  });

  // test with 9345
  it(`9345`, () => {
    expect(fromArabicDigit("٩٣٤٥", false)).toBe(9345);
  });
  // test with 100
  it(`100`, () => {
    expect(fromArabicDigit("١٠٠", false)).toBe(100);
  });

  // do a loop and test all digits under 1000
  for (let i = 1; i <= 1000; i++) {
    it(`${i}`, () => {
      expect(fromArabicDigit(toArabicDigit(i, false), false)).toBe(i);
    });
  }

  // test with a paragraph with numbers in between, intOnly to false
  const paragraphWithArabicNumbers = `١٢٣٤٥٦٧٨٩٠ lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  it(`paragraphWithNumbers`, () => {
    expect(fromArabicDigit(paragraphWithArabicNumbers)).toBe(
      `1234567890 lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    );
  });

  const paragraphWithArabicNumbers1 = `١٢٣٤٥٦٧  ٨٩٠ lorem ipsum dolor s٢٣٤٥it amet, consec٨٩tetur adipisc٨٩ing elit.`;
  it(`paragraphWithNumbers1`, () => {
    expect(fromArabicDigit(paragraphWithArabicNumbers1, false)).toBe(
      "1234567  890 lorem ipsum dolor s2345it amet, consec89tetur adipisc89ing elit.",
    );
  });

  const paragraphWithArabicNumbers3 = `١٢٣٤٥٦٧  ٨٩٠ lorem ipsum dolor s٢٣٤٥it amet, consec٨٩tetur adipisc٨٩ing elit.`;
  it(`paragraphWithNumbers1`, () => {
    expect(fromArabicDigit(paragraphWithArabicNumbers3, true)).toBe(
      123_456_789_023_458_990,
    );
  });
});
