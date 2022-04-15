# type-sort

This is a sorting algorithm implemented using only TypeScript types. Note: requires TypeScript 4.7.0 or newer.

[Try the live demo in the TypeScript Playground.](https://www.typescriptlang.org/play?ts=4.7.0-dev.20220408#code/JYWwDg9gTgLgBAbzgcSgUwIYzVAKgCwwDs4BfOAMyghDgCIYBPMNAWjABsBXAZzoG4AUIID0AKjGC4YuAEkiPHDB5xicYNlrAiMCKrg9o2ACaqoUDIwB0UsSMFMWchUoA8uWZrhoAHtiLGKkRcIABGOAA0cLgAgubefmgBQSHhUADaALoAfHAAvHAAFFLRcVAJ-oFw6SVw6kQUOHIAjBVJVcFhkbX1jeWyAExtyXCdaRE92n1wAArAAG4Q8L6VKV1QE3V1VjtTTQBKwADm+MuJI2M4WSWZcAD8zoqwAELAigDGMO6eaCBR6bJmlFBpkonNFjAoocTjBcgAuEqxeIrdoqdJ7coACUwphRF1SkTgOysGOiGGAHGGHQJGUymRKD1QmGweEIRG+mii2IwxiiFAwHEUuTxVRgUC4aAZ1W5vKJO3kTy+Hk5ZIp2XpdTh1WVvyixKRUA1cC16R1IHpAEphOJJNJHkoVGoNL96rpvBp8E0YJ64Bw0BR4NA4FBjqcDMBjGg4BAKPpDLA0KYMOZLJsZJGWAFtEc4AB3T3epoadQqDjJo5etlwQtwMALJZFd5JMVoC1weYCiU2O22aL4N4luC8ROqR0kCBgGCgN5YYAQEhu9DGLhN6s+y7lGPBtDvLhQHhzhS9ohoROJqL54DvfCqMBgag+UBYNAcRhwYwQLihP0qGsgDCPiAITVlwnBRgeABeaDdnYDjMFGCpKK8HxKj8tAims4xwAAMv6ZyrKMNJZGC9b4aihHrFCoZkfi6xZLkBTFHUTLPqyxAcrqsykcK5yiuKkp1A86TErhAYkRCeryi4sAcX8cDQqc6olCaxKITJZpRKJsLiUsklWApMCWtaEi9gAykYv4+i+vzNio2j6DAoF+tGsb5hAzkbjwMH2I4UbmQmxjuAAciEKgYRRaT0fkiIhSAYW8WipIylSmGEsSpK4OSlLhRuWRGg8alfDKUT+SY7hZdk2TKdUmRCHBTi4GgPAwAADPkcClYmrj0UIvnRE1MCtAUnWBekzQ5L18H9c1QzDUYXVjVEAwTfVUaNc1ADM7Ujd1AxRON2STQ1A0ACzbfNo1AnAe1wBtK19etMAAKznQF3VXRtS33VNj0AGyvWVi23UtUQtd9x3NQA7ADC0nVErDNC18PNAAnPtSNwKj8MowAHFEkMY80T3g2tA04zDl1RJ910g7dLUYzdN0Yzj9MY8z+PYyjuM4zjkN879Auc9zvP879T1ROLwNwHDcC-V9h2rdNMAoxT3U42jcA81EvPw5Dcuy5LT0yyd1MbTdT36wM1MIxLJ2WxtMusDd1My5L+vUzdNuaxzsvI-rRP7Y7zTU8H+1M1EKMrUAA)

```ts
type SortedThings = Sorted<[0, 8, -7, -3e7, 1337, 5, 3, 4]>
// SortedThings has type of [-30000000, -7, 0, 3, 4, 5, 8, 1337]
```

## FAQ

**Q. Does this actually work?**

A. Yes, but only for tuples up to around 90 elements long, containing integers between -10<sup>21</sup> and 10<sup>21</sup>.

**Q. Why would I ever want to use this?**

A. Uhh... science?

## Credits

This implementation uses `GreaterThan` from [type-plus](https://github.com/unional/type-plus) to perform comparisons between numbers.