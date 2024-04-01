import { useState } from 'react';
import { DateInput } from './DateInput';

type DateRangeProps = {};

export const DateRange = ({ }: DateRangeProps) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        onChange={({ target }) => setStartDate(target.value)}
        title='Start'
      />
      {startDate}
      {endDate}
      <DateInput
        onChange={({ target }) => setEndDate(target.value)}
        title='End'
      />
    </form>
  );
};
