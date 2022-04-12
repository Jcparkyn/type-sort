import type { GreaterThan } from "./greater-than";

type SortedPair<N1 extends number, N2 extends number> = GreaterThan<N1, N2> extends true
  ? [N2, N1]
  : [N1, N2]

const sortedPairTest1: SortedPair<2, 3> = [2, 3];
const sortedPairTest2: SortedPair<3, 2> = [2, 3];
// @ts-expect-error
const sortedPairTest3: SortedPair<2, 3> = [3, 2];

type Insert<TItem extends number, TArr extends number[]> =
  TArr extends [infer head extends number]
    ? SortedPair<TItem, head>
    : TArr extends [infer head extends number, ...infer tail extends number[]]
      ? GreaterThan<TItem, head> extends true
        ? [head, ...Insert<TItem, tail>] // TODO
        : [TItem, ...TArr]
      : never;

type Sorted<TNums extends number[]> = TNums extends [number, number]
  ? SortedPair<TNums[0], TNums[1]>
  : TNums extends [infer head extends number, ...infer tail extends number[]]
  ? Insert<head, Sorted<tail>>
  : never;

type X7 = Sorted<[1, 2]>;
type X8 = Sorted<[2, 1]>;
type X9 = Sorted<[3, 2, 1]>;
type X10 = Sorted<[1, 2, 3]>;
type X11 = Sorted<[1, 3, 2]>;
type X12 = Sorted<[1, 3, 2, 0]>;
type X13 = Sorted<[1, 3, 2, 2, 300, 2, 2, 0, 0, 8, 7, 6, 5, 3, 4, 6, 2]>;

