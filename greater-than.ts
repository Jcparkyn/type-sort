
type Tuple<T, N extends number, R extends unknown[] = []> =
  R['length'] extends N
    ? R
    : Tuple<T, N, [T, ...R]>;

export type NumberTuple<N extends number> = Tuple<number, N>

export type GreaterThan<N1 extends number, N2 extends number> =
  NumberTuple<N1> extends [...NumberTuple<N2>, ...any[]]
    ? true
    : false


const gtTest1: GreaterThan<199, 200> = false;
const gtTest2: GreaterThan<200, 199> = true;



type Plus<N1 extends number, N2 extends number> = [...NumberTuple<N1>, ...NumberTuple<N2>]["length"]
type x = Plus<2, 500>;

