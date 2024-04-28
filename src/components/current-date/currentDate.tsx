'use client'

import { useEffect } from "react"
import { formatISO } from 'date-fns';
import moment from 'moment';
import momentTZ from 'moment-timezone';

import { createDateInSaoPaulo } from "@/utils";

export function CurrentDate() {
  const deadLineDate = createDateInSaoPaulo()

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

  const deadLineDateFormat = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(deadLineDate)

  
  let now1 = momentTZ().tz("America/Sao_Paulo")
  let closingDate = momentTZ(deadLineDate).tz("America/Sao_Paulo")
  // let closingDate = momentTZ("2024-04-26T14:00:00").tz("America/Sao_Paulo")

  console.log('deadLineDate', deadLineDate)
  console.log('closingDate', closingDate)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <span>Dia Atual:  <span>{currentDateFormat}</span></span>
        <span>Dia de fechamento:  <span>{deadLineDateFormat}</span></span>
        <span>Dia Atual é maior que dia de fechamento: <span>{String(isGreater)}</span></span>
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <span>Dia Atual:  <span>{currentDate.toUTCString()}</span></span>
        <span>Dia de fechamento:  <span>{deadLineDate.toUTCString()}</span></span>
        <span>Dia Atual é maior que dia de fechamento: <span>{String(isGreater)}</span></span>
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <span>Dia Atual (Brasília):  <span>{now1.toString()}</span></span>
        <span>Dia de fechamento (Brasília):  <span>{closingDate.toString()}</span></span>
        <span>Dia Atual é maior que dia de fechamento: <span>{String(now1.isAfter(closingDate))}</span></span>
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <span>Dia Atual (Brasília):  <span>{now1.toString()}</span></span>
        <span>Dia de fechamento (Brasília):  <span>{deadLineDate.toString()}</span></span>
        <span>Dia Atual é maior que dia de fechamento: <span>{String(now1.isAfter(closingDate))}</span></span>
      </div>
    </div>
  )
}
