export function CurrentDate() {
  const currentDate = new Date()
  const currentDateFormat = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(currentDate)

  return (
    <div>
      <span>Horário Atual (Hospedagem):  <span>{currentDateFormat}</span></span>
    </div>
  )
}
