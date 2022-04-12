import { And, Equal, IsPositive, IsWhole, Not, DigitArray, Max, PadLeft, Head, Digit, Tail } from "type-plus";

type gtTest1 = GreaterThanExtended<1, 2>
type gtTest2 = GreaterThanExtended<2, 1>
type gtTest3 = GreaterThanExtended<-1, 1>
type gtTest4 = GreaterThanExtended<1, -1>
type gtTest5 = GreaterThanExtended<-2, -1>
type gtTest6 = GreaterThanExtended<-1, -2>

export type GreaterThanExtended<A extends number, B extends number, Fail = never> =
  And<IsWhole<A>, IsWhole<B>> extends false ? Fail :
  number extends A ? Fail :
  number extends B ? Fail :
  Equal<A, B> extends true ? false :
  And<IsPositive<A>, Not<IsPositive<B>>> extends true ? true :
  And<Not<IsPositive<A>>, IsPositive<B>> extends true ? false :
  And<IsPositive<A>, IsPositive<B>> extends true ? OnPositiveWhole<A, B> :
  OnPositiveWhole<B, A>


type OnPositiveWhole<A extends number, B extends number> = (
  FromNumberAbs<A> extends infer DA ? DA extends number[] ?
  FromNumberAbs<B> extends infer DB ? DB extends number[] ?
  Max<DA['length'], DB['length']> extends infer M ? M extends number ?
  PadLeft<DA, M, 0> extends infer PDA ? PDA extends number[] ?
  PadLeft<DB, M, 0> extends infer PDB ? PDB extends number[] ?
  OnDigitArray<PDA, PDB>
  : never : never
  : never : never
  : never : never
  : never : never
  : never : never
)

type OnDigitArray<DA extends number[], DB extends number[]> = (
  Equal<Head<DA>, Head<DB>> extends true
    ? OnDigitArray<Tail<DA>, Tail<DB>>
    : Digit.GreaterThan<Head<DA>, Head<DB>>
)

type TrimMinusSign<N extends string> = N extends `-${infer rest}`
  ? rest : N;

type FromNumberAbs<N extends number> = DigitArray.FromString<TrimMinusSign<`${N}`>>

type z = FromNumberAbs<-407>;