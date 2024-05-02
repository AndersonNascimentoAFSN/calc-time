interface GetPreselectedMonthOptionProps {
  current: {
    month: number
    year: number
  }
  isPastClosingDay: boolean
}

export function getPreselectedMonthOption({
  current: { month, year },
  isPastClosingDay,
}: GetPreselectedMonthOptionProps) {
  const currentMonth = `${year}-${(month + 1).toString().padStart(2, '0')}`

  const futureMonth = `${year}-${(month + 2).toString().padStart(2, '0')}`

  const preSelectedMonthOption = isPastClosingDay ? futureMonth : currentMonth

  return preSelectedMonthOption
}
