import { useEffect, useState } from 'react'
import moment from 'moment'

import { getPreselectedMonthOption } from '@/utils/getPreselectedMonthOption'

const MANAGER_COMPETENCE_DEADLINE_HOUR =
  process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR ||
  '14:00'

const COLLABORATOR_COMPETENCE_DEADLINE_HOUR =
  process.env.NEXT_PUBLIC_MAX_HOUR_LAUNCH || '09:30'

interface UsePreSelectedOptionProps {
  dateOfNextCompetence: Date
  appointmentManagement: boolean
}

export function usePreSelectedOption({
  appointmentManagement,
  dateOfNextCompetence,
}: UsePreSelectedOptionProps) {
  const [preSelectedOption, setPreSelectedOption] = useState<string>('')
  const [isPastClosingDay, setIsPastClosingDay] = useState<null | boolean>(null)

  useEffect(() => {
    const currentDateLocalUtc = moment().utc()

    function hoursAndMinutesByResponsibility(): string {
      return appointmentManagement
        ? MANAGER_COMPETENCE_DEADLINE_HOUR
        : COLLABORATOR_COMPETENCE_DEADLINE_HOUR
    }

    const hoursAndMinutes = hoursAndMinutesByResponsibility()

    const hours = Number(hoursAndMinutes?.split(':')?.[0])
    const minutes = Number(hoursAndMinutes?.split(':')?.[1])

    const dateOfNextCompetenceInUTC = moment
      .tz(
        {
          day: dateOfNextCompetence.getDate(),
          hour: hours,
          minute: minutes,
        },
        'America/Sao_Paulo'
      )
      .utc()

    const isPastClosingDay = currentDateLocalUtc.isAfter(
      dateOfNextCompetenceInUTC
    )

    setIsPastClosingDay(isPastClosingDay)


    const month = currentDateLocalUtc.month()
    const year = currentDateLocalUtc.year()

    const preSelectedMonthOption = getPreselectedMonthOption({
      current: {
        month: month,
        year: year,
      },
      isPastClosingDay: isPastClosingDay,
    })

    setPreSelectedOption(preSelectedMonthOption)
  }, [dateOfNextCompetence, appointmentManagement])

  return {
    preSelectedOption,
    isPastClosingDay
  }
}
