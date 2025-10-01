/**
 * Склонение существительных по числу
 * @param count - колличество
 * @param one - (если число заканчивается на 1
 * @param few - (если число щаканчивается на 2 и подобные)
 * @param many - (если число заканчиватется на 10 и подобные)
 * Пример: ["задача", "задачи", "задач"]
 * Пример: ['товар', 'товара', 'товаров']
 */

export default function pluralize(count: number, one: string, few: string, many: string) {
    const mod10 = count % 10
    const mod100 = count % 100

    if(mod10 === 1 && mod100 !== 11) return one

    if(mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few

    return many
}