export interface Ingredient {
    icon: string,
    label: string
}

export const allIngredient = [
    { icon: '🍎', label: 'Apple' },
    { icon: '🍌', label: 'Banana' },
    { icon: '🫐', label: 'Bluebery' }
]

const [Apple, Banana, Bluebery] = allIngredient
export const initialTabs = [Apple, Banana, Bluebery]

export function getNextIngredient(
    ingredients: Ingredient[]
): Ingredient | undefined {
    const exing = new Set(ingredients)
    return allIngredient.find((ingredients) => !exing.has(ingredients))
}
