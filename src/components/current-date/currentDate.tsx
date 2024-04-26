import { createDateInTimeZone } from "@/utils/create-date-in-time-zone"

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

  const dateInTimeZoneBr = createDateInTimeZone(currentDate, -3)
  const dateInTimeZoneBrFormat = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(dateInTimeZoneBr)

  return (
    <div>
      <div>
        <span>Horário Atual (Hospedagem):  <span>{currentDateFormat}</span></span>

        <div>{currentDate.toISOString()}</div>
      </div>

      <div>
        <span>Horário Atual (Horário Brasilia):  <span>{dateInTimeZoneBrFormat}</span></span>
      </div>
    </div>
  )
}
