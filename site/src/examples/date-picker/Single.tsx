import type { DateValue } from "@internationalized/date";
import {
  DatePicker,
  DatePickerOverlay,
  DatePickerSingleInput,
  DatePickerSinglePanel,
  type SingleDateSelection,
  formatDate,
  getUsLocale,
} from "@salt-ds/lab";
import { type ReactElement, useCallback } from "react";

function formatSingleDate(
  date: DateValue | null,
  locale = getUsLocale(),
  options?: Intl.DateTimeFormatOptions,
) {
  if (date) {
    return formatDate(date, locale, options);
  }
  return date;
}

export const Single = (): ReactElement => {
  const handleSelectionChange = useCallback(
    (newSelectedDate: SingleDateSelection | null, error: string | false) => {
      console.log(`Selected date: ${formatSingleDate(newSelectedDate)}`);
      console.log(`Error: ${error}`);
    },
    [],
  );

  return (
    <DatePicker
      selectionVariant="single"
      onSelectionChange={handleSelectionChange}
    >
      <DatePickerSingleInput />
      <DatePickerOverlay>
        <DatePickerSinglePanel />
      </DatePickerOverlay>
    </DatePicker>
  );
};
