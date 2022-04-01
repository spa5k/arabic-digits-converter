import { describe, expect, it } from "vitest";
import { hasArabicDigit } from "../src/toArabicNumbers";

describe("#1 hasArabic test", () => {
  it(`1`, () => {
    expect(hasArabicDigit("١")).toBe(true);
  });
  it(`2`, () => {
    expect(hasArabicDigit("٢")).toBe(true);
  });
  it(`11`, () => {
    expect(hasArabicDigit("١١")).toBe(true);
  });
  // test with 9345 with 34 in arabic letters
  it(`9345`, () => {
    expect(hasArabicDigit("٩٣٤٥")).toBe(true);
  });
  // test with only numbers
  it(`100`, () => {
    expect(hasArabicDigit("100")).toBe(false);
  });
  // test inside paragraph
  const paragraph = `١٢٣٤٥٦٧٨٩٠ lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  it(`paragraph`, () => {
    expect(hasArabicDigit(paragraph)).toBe(true);
  });

  // paragraph with no arabic digit
  const paragraph1 = `lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  it(`paragraph1`, () => {
    expect(hasArabicDigit(paragraph1)).toBe(false);
  });
});
