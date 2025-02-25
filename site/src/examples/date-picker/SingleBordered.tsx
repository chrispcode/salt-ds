import type { DateValue } from "@internationalized/date";
import {
  DatePicker,
  DatePickerOverlay,
  DatePickerSingleInput,
  DatePickerSinglePanel,
  type SingleDateSelection,
  formatDate,
  getCurrentLocale,
} from "@salt-ds/lab";
import { type ReactElement, useCallback } from "react";

function formatSingleDate(
  date: DateValue | null,
  locale = getCurrentLocale(),
  options?: Intl.DateTimeFormatOptions,
) {
  if (date) {
    return formatDate(date, locale, options);
  }
  return date;
}

export const SingleBordered = (): ReactElement => {
  const handleSelectedDateChange = useCallback(
    (newSelectedDate: SingleDateSelection | null) => {
      console.log(`Selected date: ${formatSingleDate(newSelectedDate)}`);
    },
    [],
  );

  return (
    <DatePicker
      selectionVariant="single"
      onSelectedDateChange={handleSelectedDateChange}
    >
      <DatePickerSingleInput bordered />
      <DatePickerOverlay>
        <DatePickerSinglePanel
          CalendarNavigationProps={{
            MonthDropdownProps: { bordered: true },
            YearDropdownProps: { bordered: true },
          }}
        />
      </DatePickerOverlay>
    </DatePicker>
  );
};
