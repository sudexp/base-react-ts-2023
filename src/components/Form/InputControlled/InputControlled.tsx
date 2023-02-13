import { FC } from 'react';
import { TextField } from '@mui/material';
import { useFormContext, Controller, FieldError } from 'react-hook-form';

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';

import FormError from '../FormError';

interface IProps {
  name: string;
  defaultValue?: string | number;
}

const InputConrolled: FC<IProps> = ({ name, defaultValue }: IProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorObj = errors[name] as FieldError;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <TextField
          {...field}
          variant='outlined'
          label={capitalizeFirstLetter(name)}
          error={!!errorObj}
          helperText={errorObj && <FormError error={errorObj.message} />}
          fullWidth
          sx={{ my: 1 }}
        />
      )}
    />
  );
};

export default InputConrolled;
