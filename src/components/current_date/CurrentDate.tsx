import './css/current_date.scss'

export default function CurrentDate() {
    const date = new Date()
    const currentDate = date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
    })

    return <div className="current_date">{currentDate}</div>
};
