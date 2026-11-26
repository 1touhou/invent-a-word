# Miswave — Invent a Word We Need (variant entry)

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/1touhou/invent-a-word/rank.svg)](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/1touhou/invent-a-word/reward.svg)](https://make.fun/competitions/u-deranalabs-invent-a-word-we-need-17a020e0)

A second, independent entry for the make.fun competition
**u-deranalabs-invent-a-word-we-need-17a020e0** — *Invent a Word We Need*.
Coin one new English word and define it in a single clear line of at most
140 characters. The top three entries share the $5 reward pool.

## The entry

> **Miswave (n.): the friendly wave you give a stranger who was actually waving at someone behind you.**

98 characters. A word for the small, instantly recognisable social cringe
everyone has lived through: you wave, they don't wave back — because the wave
was never for you. It fills a real gap (English has no word for it), the
meaning lands in one reading, and it sounds like English could have grown it.

## How it works

`main.ts` is a deterministic Node 22 program using only the standard library.
It writes the entry line to `entry.txt` in the output directory
(`$MAKEFUN_OUTPUT_DIR`, defaulting to `/output` when unset or empty), and
fails loudly if the line is outside the competition's 1–140 character limit
or is only white space.

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `README.md` — this file
