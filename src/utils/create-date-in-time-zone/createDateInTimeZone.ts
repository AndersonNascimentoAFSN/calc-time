// // Função para criar um objeto Date ajustado para um fuso horário específico
// export function createDateInTimeZone(date: Date, timeZoneOffset: number): Date {
//   // Obter o UTC timestamp da data
//   const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),
//     date.getHours(), date.getMinutes(), date.getSeconds());

//   // Criar uma nova data ajustando para o fuso horário
//   return new Date(utcDate + timeZoneOffset * 3600000);
// }

const deadlineDay = process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY
const deadlineHour = process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR

import { toZonedTime } from 'date-fns-tz';

export function createDateInSaoPaulo(): Date {
  console.log('process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY ', process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_DAY)
  console.log('process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR ', process.env.MANAGER_APPROVE_REPPROVE_COMPETENCE_DEADLINE_HOUR)


  // Pegar a data e hora UTC atual
  // const now = new Date();
  // const nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), Number(deadlineDay), Number(deadlineHour?.split(':')[0]), Number(deadlineHour?.split(':')[1]), 0)

  const dateUtc = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), Number(deadlineDay), Number(deadlineHour?.split(':')[0]), Number(deadlineHour?.split(':')[1])), 0);

  // // Definir o fuso horário de São Paulo
  // const timeZone = 'America/Sao_Paulo';

  // // Converter a hora UTC para o fuso horário de São Paulo
  // const saoPauloDate = toZonedTime(nowUtc, timeZone);

  // return saoPauloDate

  return dateUtc
}


