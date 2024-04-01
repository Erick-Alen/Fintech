import { ComponentProps } from 'react';

type DateInputProps = ComponentProps<'input'> & {
  title: string
};

export const DateInput = ({ title, ...props }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input id={title} name={title} type='date' {...props} />
    </div>
  );
};
