import { getPreselectedMonthOption } from './getPreselectedMonthOption'

const sut = ({
  isPastClosingDay,
  current: { month, year },
}: {
  isPastClosingDay: boolean
  current: { month: number; year: number }
}) => {
  const result = getPreselectedMonthOption({
    current: {
      month: month,
      year: year,
    },
    isPastClosingDay,
  })

  return {
    result,
  }
}

describe('getPreselectedMonthOption', () => {
  // beforeEach(() => {
  //   jest.useFakeTimers()
  // })

  // afterEach(() => {
  //   jest.runOnlyPendingTimers()
  //   jest.useRealTimers()
  // })

  it('should preselect month option is current month if currentDate < DateOfNextCompetence', () => {
    // jest.setSystemTime(new Date(2024, 1 - 1, 14, 0, 0))

    const { result } = sut({
      current: {
        month: 0,
        year: 2024,
      },
      isPastClosingDay: false,
    })

    expect(result).toBe('2024-01')
  })

  it('should preselect month option is future month if currentDate > DateOfNextCompetence', () => {
    // jest.setSystemTime(new Date(2024, 2 - 1, 20, 14, 10))

    const { result } = sut({
      current: {
        month: 1,
        year: 2024,
      },
      isPastClosingDay: true,
    })

    expect(result).toBe('2024-03')
  })
})
