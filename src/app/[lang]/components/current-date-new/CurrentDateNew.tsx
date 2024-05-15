'use client'

import { useEffect } from "react"
import { formatISO } from 'date-fns';
import moment from 'moment';
import momentTZ from 'moment-timezone';

const deadlineDay = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY
const deadlineHour = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR

const deadlineDayCollaborator = process.env.NEXT_PUBLIC_MAX_DAY_LAUNCH
const deadlineHourCollaborator = process.env.NEXT_PUBLIC_MAX_HOUR_LAUNCH

import { createDateInSaoPaulo } from "@/utils";
import { usePreSelectedOption } from "@/hooks/use-pre-selected-option/usePreSelectedOption";

export function CurrentDateNew() {
  // const deadLineDate = createDateInSaoPaulo()
  const day = Number(deadlineDay)
  const hours = Number(deadlineHour?.split(':')[0])
  const minutes = Number(deadlineHour?.split(':')[1])

  const currentDateLocal = momentTZ()
  const currentDateLocalUtc = momentTZ().utc()

  const currentDateBrazilian = momentTZ().tz("America/Sao_Paulo")
  const currentDateBrazilianUtc = momentTZ().tz("America/Sao_Paulo").utc()

  useEffect(() => {
    const getIp = async () => {
      const response = await fetch('https://api.ipify.org?format=json')
      const ip = await response.json()
      console.log('ip', ip)
    }
    getIp()
  }, [])

  const timezoneOffsetCurrentDate = currentDateLocal.utcOffset();
  const timezoneOffsetCurrentDateUtc = currentDateLocalUtc.utcOffset();

  const timezoneOffsetCurrentDateBrazilian = currentDateBrazilian.utcOffset()

  const brazilianClosingDate = moment.tz({
    day: day,
    hour: hours,
    minute: minutes,
  }, "America/Sao_Paulo")

  const closeDateUTC = brazilianClosingDate.utc()

  const closeDateManager = closeDateUTC.toDate()

  const closeDateCollaborator = moment.tz({
    day: day,
    hour: deadlineHourCollaborator?.split(':')[0],
    minute: deadlineHourCollaborator?.split(':')[1],
  }, "America/Sao_Paulo").utc().toDate()

  const { preSelectedOption: collaborator, isPastClosingDay: isPastClosingDayCollaborator } = usePreSelectedOption({ appointmentManagement: false, dateOfNextCompetence: closeDateCollaborator })
  const { preSelectedOption: manager,  isPastClosingDay: isPastClosingDayManager } = usePreSelectedOption({ appointmentManagement: true, dateOfNextCompetence: closeDateManager })

  console.log('collaborator', collaborator)
  console.log('manager', manager)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <h1 className="text-red-700">Horário Cliente</h1>
        <span>Dia Atual (Região / timezone:  {timezoneOffsetCurrentDate / 60}):  <span>{currentDateLocal.toString()}</span></span>
        <span>Dia Atual (UTC / timezone: {timezoneOffsetCurrentDateUtc / 60}):  <span>{currentDateLocalUtc.toString()}</span></span>
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <h1 className="text-red-700">Horário Brasília</h1>
        <span>Dia Atual (Brasília / timezone:  {timezoneOffsetCurrentDateBrazilian / 60}):  <span>{currentDateBrazilian.toString()}</span></span>
        <span>Dia Atual (UTC / timezone: {timezoneOffsetCurrentDateUtc / 60}):  <span>{currentDateBrazilianUtc.toString()}</span></span>
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <h1 className="text-red-700">Horário de fechamento</h1>
        <span>Baseando-se no horário UTC:  <span>{closeDateUTC.toString()}</span></span>
        <span>Baseando-se no horário UTC:  <span>{closeDateManager.toUTCString()}</span></span>
        {/* <span>Baseando-se no horário local <br /> comparado ao horário de brasília:  <span>{currentDateBrazilian.toString()}</span></span>
        <span>Baseando-se no horário de brasília:  <span>{currentDateBrazilianUtc.toString()}</span></span> */}
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <h1 className="text-red-700">Dia Atual é maior que dia de fechamento</h1>
        <span>Comparação com Datas em UTC: <span>{String(currentDateBrazilianUtc.isAfter(closeDateUTC))}</span></span>
      </div>

      <div className="flex flex-col gap-4 border-blue-800 border-4 p-4">
        <h1 className="text-red-700">Option Select</h1>
        <span>Colaborador: 
          <span>{collaborator} - {deadlineHourCollaborator} - {String(isPastClosingDayCollaborator)}</span>
        </span>
        <span>Gerente: 
          <span>{manager} - {deadlineHour} - {String(isPastClosingDayManager)}</span>
        </span>
      </div>
    </div>
  )
}
