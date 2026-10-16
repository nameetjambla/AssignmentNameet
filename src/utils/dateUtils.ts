/**
 * Date Utilities - Helper functions for date manipulation
 */

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayDate(): string {
  return formatDate(new Date());
}

/**
 * Get tomorrow's date in YYYY-MM-DD format
 */
export function getTomorrowDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDate(tomorrow);
}

/**
 * Get date N days from today in YYYY-MM-DD format
 */
export function getDateFromToday(daysFromNow: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return formatDate(date);
}

/**
 * Get yesterday's date in YYYY-MM-DD format (past date)
 */
export function getYesterdayDate(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return formatDate(yesterday);
}

/**
 * Format date to YYYY-MM-DD
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get date difference in days
 */
export function getDateDifference(date1: Date, date2: Date): number {
  const time = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(time / (1000 * 3600 * 24));
}

/**
 * Verify if date is in the past
 */
export function isPastDate(dateString: string): boolean {
  const givenDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return givenDate < today;
}

/**
 * Verify if date is today
 */
export function isToday(dateString: string): boolean {
  return dateString === getTodayDate();
}

/**
 * Verify if date is tomorrow
 */
export function isTomorrow(dateString: string): boolean {
  return dateString === getTomorrowDate();
}
