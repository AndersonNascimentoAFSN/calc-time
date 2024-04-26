// Função para criar um objeto Date ajustado para um fuso horário específico
export function createDateInTimeZone(date: Date, timeZoneOffset: number): Date {
  // Obter o UTC timestamp da data
  const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours(), date.getMinutes(), date.getSeconds());

  // Criar uma nova data ajustando para o fuso horário
  return new Date(utcDate + timeZoneOffset * 3600000);
}
