/**
 * Склонение глаголов по числу
 * @param count - количество
 * @param one - (если число заканчивается на 1
 * @param many - (если число заканчиватется на 2 и больше)
 * Пример: ["осталась", "осталось"] 1 задача
 */

export default function pluralizeVerb(count: number, one: string, many: string): string {
  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return one
  } else {
    return many
  }
}