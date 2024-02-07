# learnable-regex

Regex that validates credit card number

## Instructions

- Clone the repository
- Run `npm install` in terminal to install prompt-sync.
- Run `node index.js`

## How I Came up With Mastercard Regex Pattern

Mastercard numbers typically start with the digit 5 and the second digit is in the range of 1 to 5. The total length of a Mastercard number is usually 16 digits. `/^(5[1-5][0-9]{14})$/`

- `^` marks the start of the string.
- `5` means that the visacard must start with a 5.
- `[1-5]` matches a single digit in the range from 1 to 5.
- `[0-9]{14}` matches exactly 14 occurences of digits from (0 to 9) after the initial two digits.
- `$` means the end of the string and everything else must come before it.

## How I Came up With Visacard Regex Pattern

Visa card numbers typically start with a 4 and have a length of 13 to 16 digits. Therefore, based on this information, we can create a regex pattern to validate Visa card numbers. `/^(4[0-9]{12}(?:[0-9]{3})?)$/`

- `^` marks the start of the string.
- `4` means that the visacard must start with a 4.
- `[0-9]{12}` Matches exactly 12 digits (0 to 9) after the initial 4.
- `(?:[0-9]{3})?` This part is optional. It's a non-capturing group `(?: ... )` followed by `?`, which makes it optional. It matches 3 additional digits (0 to 9). This accounts for Visa card numbers with 16 digits.
- `$` means the end of the string and everything else must come before it.
