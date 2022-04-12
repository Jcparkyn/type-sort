
type Tuple<T, N extends number, R extends unknown[] = []> =
  R['length'] extends N
    ? R
    : Tuple<T, N, [T, ...R]>;

export type GreaterThan<N1 extends number, N2 extends number> =
  Tuple<unknown, N1> extends [...Tuple<unknown, N2>, ...any[]]
    ? true
    : false

const gtTest1: GreaterThan<199, 600> = false;
const gtTest2: GreaterThan<600, 199> = true;
// @ts-expect-error
const gtTest3: GreaterThan<199, 600> = true;

type Plus<N1 extends number, N2 extends number> = [...Tuple<unknown, N1>, ...Tuple<unknown, N2>]["length"]
type x = Plus<234, 631>;

