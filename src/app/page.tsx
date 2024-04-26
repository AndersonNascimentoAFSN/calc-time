import { Conversor } from "@/components";
import { createDateInSaoPaulo } from "@/utils";

export default function Home() {
  const now = new Date()

  const deadlineDay = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY
  const deadlineHour = process.env.NEXT_PUBLIC_MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR

  // const deadLineDate = new Date(now.getFullYear(), now.getMonth(), Number(deadlineDay), Number(deadlineHour?.split(':')[0]), Number(deadlineHour?.split(':')[1]), 0)

  const deadLineDate = createDateInSaoPaulo()


  // deadLineDate.setHours(deadLineDate.getHours() + 3)

  return (
    <main>
      <Conversor deadLineDate={deadLineDate} />
    </main>
  );
}
