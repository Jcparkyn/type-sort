import { GreaterThanExtended } from "greater-than";

type SortedPair<N1 extends number, N2 extends number> = GreaterThanExtended<N1, N2, false> extends true
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
      ? GreaterThanExtended<TItem, head, false> extends true
        ? [head, ...Insert<TItem, tail>]
        : [TItem, ...TArr]
      : never;

type Sorted<TNums extends number[]> = TNums extends [number, number]
  ? SortedPair<TNums[0], TNums[1]>
  : TNums extends [infer head extends number, ...infer tail extends number[]]
  ? Insert<head, Sorted<tail>>
  : never;

type Test1 = Sorted<[1, 2]>;
type Test2 = Sorted<[2, 1]>;
type Test3 = Sorted<[3, 2, 1]>;
type Test4 = Sorted<[1, 2, 3]>;
type Test5 = Sorted<[1, 3, 2]>;
type Test6 = Sorted<[1, 3, 2, 0]>;
type Test7 = Sorted<[1, 3, 2, 2, 300, 2, 2, 0, 8000, 0, 8, 7, -999888777666, -999888777665, 5, 3, 4, 6, 2]>;
type Test8 = Sorted<[89, 88, 87, -76, 65, 54, 43, 32, 56, 23, -1, 546, 234, -2, 3, 4, 5, 6, 3, 2, -1, 8, 7, 6, -16, 15, 14, -13, 13, 12, 0, 9]>;
type Test9 = Sorted<[4, -10, -19, 10, 19, -98, 70, 15]>;
