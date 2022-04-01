# :sparkles: arabic-digits-converter

Convert numbers to their arabic counterpart and vice versa.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/arabic-digits-converter?logo=files&style=for-the-badge)
![npm](https://img.shields.io/npm/v/arabic-digits-converter?logo=npm&style=for-the-badge)
![node-current](https://img.shields.io/badge/Node-%3E=14-success?style=for-the-badge&logo=node)
![npm](https://img.shields.io/npm/dw/arabic-digits-converter?style=for-the-badge)

## :rocket: Installation

```sh
npm install arabic-digits-converter
```

```yarn
yarn add arabic-digits-converter
```

## :blue_book: Usage/Examples

**toArabicDigit and fromArabicDigit, both take their second argument as intOnly, it decides whether to only send numbers back or not.**

### toArabicDigit.

1. Convert numbers to their arabic counterpart.

```ts
import { toArabicDigit } from "arabic-numbers-converter";

const num = 1234567890;
// intOnly is defaulted to false.
toArabicDigit(num); // => ١٢٣٤٥٦٧٨٩٠
```

2. Convert a paragraph with intOnly set to false.

```ts
import { toArabicDigit } from "arabic-numbers-converter";

const para =
  "1 2 3 4 5 6 7 8 9 10 loream ipsum dolor s12323it am123123et, consectetasd123123ur adipiscin11g elit.";

// intOnly set to false.
toArabicDigit(para, false); // => ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ١٠ loream ipsum dolor s١٢٣٢٣it am١٢٣١٢٣et, consectetasd١٢٣١٢٣ur adipiscin١١g elit.
```

3. Convert a paragraph with intOnly set to true.

```ts
import { toArabicDigit } from "arabic-numbers-converter";

const para = "abcd 123 123 123";

// intOnly set to false.
toArabicDigit(para, true); // => ١٢٣١٢٣١٢٣
toArabicDigit(para, false); // => abcd ١٢٣ ١٢٣ ١٢٣
```

### fromArabicDigit.

1. Convert arabic numbers to their numeral counterpart.

```ts
import { fromArabicDigit } from "arabic-numbers-converter";

fromArabicDigit("١", false); // => 1
```

2. Convert a paragraph with numbers in betweem

```ts
const paragraphWithArabicNumbers =
  `١٢٣٤٥٦٧٨٩٠ lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

fromArabicDigit(paragraphWithArabicNumbers); // => '1234567890 lorem ipsum dolor sit amet, consectetur adipiscing elit.'
```

3. Convert a line with intOnly set to true

```ts
const paragraphWithArabicNumbers =
  `١٢٣٤٥٦٧  ٨٩٠ lorem ipsum dolor s٢٣٤٥it amet, consec٨٩tetur adipisc٨٩ing elit.`;

fromArabicDigit(paragraphWithArabicNumbers, true); // => 123456789023458990
```

## FAQs.

1. If the input in fromArabicDigits is only of type number (or only contains arabic digits), or intOnly is set to true, then the output type will be of number.

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release process. Using `semantic-release` will automatically create a github release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature or breaking release.

Commands:

- `semantic-release`: triggers a release (used in CI)
