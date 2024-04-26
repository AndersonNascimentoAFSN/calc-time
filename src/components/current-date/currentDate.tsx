'use client'

import { useEffect } from "react"
import { createDateInTimeZone } from "@/utils/create-date-in-time-zone"

export function CurrentDate() {
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

  const deadLineDate = new Date(now.getFullYear(), now.getMonth(), Number(deadlineDay), Number(deadlineHour?.split(':')[0]), Number(deadlineHour?.split(':')[1]), 0)

  const deadLineDateFormat = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(deadLineDate)

  const currentDate = new Date()
  // currentDate.setHours(currentDate.getHours() - 3)

  const isGreater = currentDate > deadLineDate

  console.log('deadLineDate', deadLineDate)
  console.log('currentDate', currentDate)
  console.log('currentDate > deadLineDate', isGreater)

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
