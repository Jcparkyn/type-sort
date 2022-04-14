import { GreaterThanExtended } from "greater-than";

type Insert<TItem extends number, TArr extends number[]> =
  TArr extends [infer Head extends number, ...infer Tail extends number[]]
    ? GreaterThanExtended<TItem, Head, false> extends true
      ? [Head, ...Insert<TItem, Tail>]
      : [TItem, ...TArr]
    : [TItem];

type Sorted<TNums extends number[]> =
  TNums extends [infer Head extends number, ...infer Tail extends number[]]
    ? Insert<Head, Sorted<Tail>>
    : [];

type Test0 = Sorted<[]>;
type Test1 = Sorted<[1]>;
type Test2 = Sorted<[1, 2]>;
type Test3 = Sorted<[2, 1]>;
type Test4 = Sorted<[1, 2, 3]>;
type Test5 = Sorted<[1, 3, 2]>;
type Test6 = Sorted<[1, 3, 2, 0]>;
type Test7 = Sorted<[4, -10, -19, 10, 19, -98, 70, 15]>;
type Test8 = Sorted<[1, 3, 2, 2, 300, 2, 2, 0, 8000, 0, 8, 7, -999888777666, -999888777665, 5, 3, 4, 6, 2]>;
type Test9 = Sorted<[89, 88, 87, -76, 65, 54, 43, 32, 56, 23, -1, 546, 234, -2, 3, 4, 5, 6, 3, 2, -1, 8, 7, 6, -16, 15, 14, -13, 13, 12, 0, 9]>;
