const deadlineDay = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY
const deadlineHour = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY

import moment from 'moment';
import momentTZ from 'moment-timezone';

export function createDateInSaoPaulo(): Date {
  const day = Number(deadlineDay)
  const hours = Number(deadlineHour?.split(':')[0])
  const minutes = Number(deadlineHour?.split(':')[1])

  const nowUtc = moment.utc()
  // nowUtc.set({ day: day, hour: hours, minute: minutes, second: 0, millisecond: 0 })

  const currentDate = new Date(2024, 4 - 1, 26, 14, 0, 0)

  const timeZone = 'America/Sao_Paulo';

  const sp = momentTZ.tz(currentDate, timeZone).toDate()
  // sp.setDate(day)
  // sp.setHours(hours)
  // sp.setMinutes(minutes)

  console.log('sp', sp)


  let now = moment().tz("America/Sao_Paulo");
  let closingDate = moment("2024-05-26T14:00:00").tz("America/Sao_Paulo");

  return closingDate.toDate()
}


