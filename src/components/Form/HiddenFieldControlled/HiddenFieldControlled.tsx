import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface IProps {
  name: string;
  defaultValue?: string | number;
}

const HiddenFieldControlled: FC<IProps> = ({ name, defaultValue }: IProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { value } }) => {
        return <input type='hidden' value={value} />;
      }}
    />
  );
};

export default HiddenFieldControlled;
