# type-sort

This is a sorting algorithm implemented using only TypeScript types. Note: requires TypeScript 4.7.0 or newer.

[Try the live demo in the TypeScript Playground.](https://www.typescriptlang.org/play?ts=4.7.0-dev.20220408#code/JYWwDg9gTgLgBAbzgcSgUwIYzVAKgCwwDs4BfOAMyghDgCIYBPMNAWjABsBXAZzoG4AUIKYs4AZWjYAJgAUMwKAB4AcgEY4aAB7Yi0nnCJcQAIxwAaOCoBMmnWj0GjpnAD44AXhTosOAsVU1SxtLCgwOHjR3bV19OBgoLjRBODgAfjgAbRCrNQBdFLgALiz1YOsCkWY0OABJIkjYJVxa7FoYhzjnMyhLXABBKCg7WKdjHsy89w9CgaGRzoNM4CIKHDh8TGkFx0NxnALU1IzJWDQ5BWUWtstNjGlXQtSSueGO3eXV9bvt96793pwAB0IJWa2GMAUHB2-xcUEmhyOx28mGweEIRGarTQIFuW1C4Ui0XsuwSSSeSPSWR+lhBQPqjRgWJu8ShrkRlOKWWuONpINeHKOJSIaAAbjghFUxKcZM0VMYDH8xnDJtM4Lh5SBFSS4pluhY9nDEScpOd5Io5QrMgAGPJ9TU8TL5R7PdUOmFLMHfLYew09PlAr0QqG+-XwvLGuoNHBMmkSU3SJSQ4AcVwurki8VQSWiGq4NA8GAaLwy85KJ2WCquIS59UFmC2EsJ8vWSzOmvVOuFgDMnnjZ0TmW7lbbUw7YnzhYALH3S4OgnBW3Bu2OpXn6wBWWfNivLyur2uTmAANm3A-LC+Hi8stura67MAA7GfZbur0ul93rdaR9e4D+4AADm-ACAMAyxH0sVgAE5YMA+DH0Q49kKg2DoPgwDEMfZCN0sXC9zgKdLGPfc70PetAJfMtMkA6DLHg+jILgVhsOI-CNyIwir27JcNxIxcr1YBcOP46xu041hP0sTj8P498oIXcC4CY-ihP4tR8LUCS1CvHS2yXADoIPTsj2gqjB20gChLouA1AAtQbJgpTH3sjdVyAA)

```ts
type SortedThings = Sorted<[0, 8, -7, -3e7, 1337, 5, 3, 4]>
// SortedThings has type of [-30000000, -7, 0, 3, 4, 5, 8, 1337]
```

## FAQ

**Q. Does this actually work?**

A. Yes, but only for integers between -9007199254740991 and 9007199254740991, and tuples up to around 40 elements long.

**Q. Why would I ever want to use this?**

A. Uhh... science?

## Credits

This implementation uses `GreaterThan` from [type-plus](https://github.com/unional/type-plus) to perform comparisons between numbers.