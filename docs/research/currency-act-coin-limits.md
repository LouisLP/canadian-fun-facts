# Currency Act coin-payment limits

Verification of the coin legal-tender figures used in the Weird Laws set
(`src/content/sets/2026-08-03-weird-laws`), per issue #45.

**Primary source**: Currency Act, R.S.C. 1985, c. C-52, s. 8 —
<https://laws-lois.justice.gc.ca/eng/acts/C-52/page-1.html> (Justice Laws Website,
consolidated federal statute). Fetched 2026-07-18.

## Verbatim text

> **Legal tender**
> **8 (1)** Subject to this section, a tender of payment of money is a legal tender if it is
> made (a) in coins that are current under section 7; and (b) in notes that are current
> under section 7.1.
>
> **Limitation**
> **(2)** A tender of payment in coins referred to in subsection (1) is a legal tender for no
> more than the following amounts for the following denominations of coins:
> (a) forty dollars if the denomination is two dollars or greater but does not exceed ten dollars;
> (b) twenty-five dollars if the denomination is one dollar;
> (c) ten dollars if the denomination is ten cents or greater but less than one dollar;
> (d) five dollars if the denomination is five cents; and
> (e) twenty-five cents if the denomination is one cent.
>
> **Coins of denominations greater than ten dollars**
> **(2.1)** In the case of coins of a denomination greater than ten dollars, a tender of payment
> referred to in subsection (1) may consist of not more than one coin, and the tender of payment
> is a legal tender for no more than the value of a single coin of that denomination.
>
> **Different amounts payable on the same day**
> **(3)** For the purposes of subsections (2) and (2.1), where more than one amount is payable by
> one person to another on the same day under one or more obligations, the total of those amounts
> is deemed to be one amount due and payable on that day.

Amendment history in the source: R.S., 1985, c. C-52, s. 8; R.S., 1985, c. 35 (3rd Supp.), s. 18;
1999, c. 4, s. 12; 2012, c. 19, s. 388; 2018, c. 12, s. 229. Subsection (4) was repealed by
2012, c. 19, s. 388.

## Verdict on the backlog figures

The backlog note (`docs/backlog/Fun Facts 21.md`) claimed 5¢→$5, 10¢→$10, $1→$25, $2→$40.
**All four check out**, with one nuance worth writing correctly.

| Denomination | Limit | Subsection |
| --- | --- | --- |
| 1¢ | 25¢ | 8(2)(e) |
| 5¢ | $5 | 8(2)(d) |
| 10¢, 25¢, 50¢ | $10 (shared tier) | 8(2)(c) |
| $1 | $25 | 8(2)(b) |
| $2 (through $10) | $40 (shared tier) | 8(2)(a) |
| over $10 | one coin only | 8(2.1) |

## Nuances the copy must respect

- **The tiers are ranges, not per-coin-type.** 8(2)(c) covers "ten cents or greater but less than
  one dollar", so dimes, quarters and 50¢ pieces share a single $10 cap. Saying "dimes: $10" alone
  is incomplete. Likewise 8(2)(a) is "two dollars or greater but does not exceed ten dollars", not
  toonies specifically.
- **The penny provision is still in force** even though the Royal Canadian Mint stopped
  distributing the 1¢ coin in February 2013 (minting ceased 2012). The coin remains legal tender;
  8(2)(e) still caps it at 25¢.
- **8(3) blocks the obvious workaround**: splitting one debt into several same-day payments does
  not reset the cap.
- This limits what counts as *legal tender*, i.e. what a creditor must accept to discharge a debt.
  A merchant is free to accept more coins voluntarily.
