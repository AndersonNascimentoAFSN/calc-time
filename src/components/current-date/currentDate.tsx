'use client'

import { useEffect } from "react"
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
  console.log(deadlineDay, deadlineHour)

  const currentDateToDeadLine = new Date()
  const deadLineDate = new Date(currentDateToDeadLine.getFullYear(), currentDateToDeadLine.getMonth(), currentDateToDeadLine.getDate(), Number(deadlineHour?.split(':')[0]), Number(deadlineHour?.split(':')[1]), 0)

  console.log('deadLineDate', deadLineDate)

  return (
    <div>
      <div>
        <span>Horário Atual (Hospedagem):  <span>{currentDateFormat}</span></span>

        <div>{JSON.stringify(currentDate)}</div>
      </div>

      <div>
        <span>Horário Atual (Horário Brasilia):  <span>{dateInTimeZoneBrFormat}</span></span>

        <div>{JSON.stringify(dateInTimeZoneBr)}</div>
      </div>
    </div>
  )
}
