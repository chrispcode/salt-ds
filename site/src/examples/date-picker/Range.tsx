import {
  DatePicker,
  DatePickerOverlay,
  DatePickerRangeInput,
  DatePickerRangePanel,
  type DateRangeSelection,
  defaultLocale,
  formatDate,
} from "@salt-ds/lab";
import { type ReactElement, useCallback } from "react";

function formatDateRange(
  dateRange: DateRangeSelection | null,
  locale = defaultLocale,
  options?: Intl.DateTimeFormatOptions,
): string {
  const { startDate, endDate } = dateRange || {};
  const formattedStartDate = startDate
    ? formatDate(startDate, locale, options)
    : startDate;
  const formattedEndDate = endDate
    ? formatDate(endDate, locale, options)
    : endDate;
  return `Start date: ${formattedStartDate}, End date: ${formattedEndDate}`;
}
export const Range = (): ReactElement => {
  const handleSelectionChange = useCallback(
    (
      newSelectedDate: DateRangeSelection | null,
      error: { startDate: string | false; endDate: string | false },
    ) => {
      console.log(`Selected date range: ${formatDateRange(newSelectedDate)}`);
      console.log(
        `Error: startDate: ${error.startDate} endDate: ${error.endDate}`,
      );
    },
    [],
  );

  return (
    <DatePicker
      selectionVariant="range"
      onSelectionChange={handleSelectionChange}
    >
      <DatePickerRangeInput />
      <DatePickerOverlay>
        <DatePickerRangePanel />
      </DatePickerOverlay>
    </DatePicker>
  );
};
