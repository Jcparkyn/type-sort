import { GreaterThanExtended } from "greater-than";

/**
 * Inserts an item into a sorted array.
 */
type Insert<TItem extends number, TArr extends number[]> = (
  TArr extends [
    infer I1 extends number,
    infer I2 extends number,
    infer Pivot extends number,
    ...infer Right extends number[]
  ] ? InsertBisect<TItem, [I1, I2], Pivot, Right> :
  TArr extends [infer Head extends number, ...infer Tail extends number[]]
  ? GreaterThanExtended<TItem, Head, false> extends true
  ? [Head, ...Insert<TItem, Tail>]
  : [TItem, ...TArr]
  : [TItem]
)

/**
 * Inserts an item into either the left or right side of a sorted array,
 * depending whether it is larger than the pivot (centre) value.
 * 
 * This is used as an optimisation to reduce the number of recursions
 * needed, which approximately doubles the maximum tuple size.
 */
type InsertBisect<TItem extends number, Left extends number[], Pivot extends number, Right extends number[]> = (
  GreaterThanExtended<TItem, Pivot> extends true
  ? [...Left, Pivot, ...Insert<TItem, Right>]
  : [...Insert<TItem, Left>, Pivot, ...Right]
)

/**
 * Sorts the elements in a tuple of whole numbers.
 */
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
