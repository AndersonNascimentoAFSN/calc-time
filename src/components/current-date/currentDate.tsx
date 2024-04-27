'use client'

import { useEffect } from "react"
import { formatISO } from 'date-fns';
import moment from 'moment';

import { toZonedTime } from 'date-fns-tz';

export function CurrentDate({deadLineDate}:{ deadLineDate: Date}) {
  const now = new Date()

  const currentDateFormat = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(now)

  // const dateInTimeZoneBr = createDateInTimeZone(currentDate, -3)
  // const dateInTimeZoneBrFormat = Intl.DateTimeFormat('pt-BR', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: '2-digit',
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  //   hour12: false
  // }).format(dateInTimeZoneBr)

  useEffect(() => {
    const getIp = async () => {
      const response = await fetch('https://api.ipify.org?format=json')
      const ip = await response.json()
      console.log('ip', ip)
    }
    getIp()
  }, [])

  const deadlineDay = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY
  const deadlineHour = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR

  const currentDate = new Date()

  const isGreater = currentDate > deadLineDate

  const hours = Number(deadlineHour?.split(':')[0])
  const minutes = Number(deadlineHour?.split(':')[1])

  deadLineDate.setHours(hours)
  deadLineDate.setMinutes(minutes)

  const deadLineDateFormat = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(deadLineDate)

  return (
    <div>
      <div className="flex flex-col gap-4">
        <span>Dia Atual:  <span>{currentDateFormat}</span></span>
        <span>Dia de fechamento:  <span>{deadLineDateFormat}</span></span>
        <span>Dia Atual é maior que dia de fechamento: <span>{String(isGreater)}</span></span>
      </div>
    </div>
  )
}
