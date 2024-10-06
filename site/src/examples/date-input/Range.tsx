import { getLocalTimeZone, today } from "@internationalized/date";
import {
  DateInputRange,
  type DateInputRangeError,
  type DateRangeSelection,
  formatDate,
  getUsLocale,
} from "@salt-ds/lab";
import type { ReactElement, SyntheticEvent } from "react";

function formatDateRange(
  dateRange: DateRangeSelection | null,
  locale = getUsLocale(),
): string {
  const { startDate, endDate } = dateRange || {};
  const formattedStartDate = startDate
    ? formatDate(startDate, locale)
    : startDate;
  const formattedEndDate = endDate ? formatDate(endDate, locale) : endDate;
  return `Start date: ${formattedStartDate}, End date: ${formattedEndDate}`;
}

export const Range = (): ReactElement => {
  const handleDateChange = (
    _event: SyntheticEvent,
    newSelectedDate: DateRangeSelection | null,
    _error: DateInputRangeError,
  ) => {
    console.log(`Selected date range: ${formatDateRange(newSelectedDate)}`);
  };
  return (
    <div style={{ width: "250px" }}>
      <DateInputRange
        defaultDate={{
          startDate: today(getLocalTimeZone()),
          endDate: today(getLocalTimeZone()).add({ days: 7 }),
        }}
        onDateChange={handleDateChange}
      />
    </div>
  );
};
