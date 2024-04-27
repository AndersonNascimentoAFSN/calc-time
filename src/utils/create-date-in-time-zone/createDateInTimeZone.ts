const deadlineDay = process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY
const deadlineHour = process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR

import { toZonedTime } from 'date-fns-tz';
import moment from 'moment';
import momentTZ from 'moment-timezone';

export function createDateInSaoPaulo(): Date {
  const day = Number(deadlineDay)
  const hours = Number(deadlineHour?.split(':')[0])
  const minutes = Number(deadlineHour?.split(':')[1])

  const nowUtc = moment.utc()
  nowUtc.set({ day: day, hour: hours, minute: minutes, second: 0, millisecond: 0 })

  const timeZone = 'America/Sao_Paulo';
  const saoPauloDate = toZonedTime(nowUtc.toDate(), timeZone);

  const sp = momentTZ.tz('2024-05-26:14:00:00', timeZone)

  return sp.toDate()
}


