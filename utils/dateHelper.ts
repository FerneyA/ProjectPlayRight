export class DateHelper {
  static todayISO(): string {
    return new Date().toISOString().split('T')[0];
  }

  static addDays(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  }
}
