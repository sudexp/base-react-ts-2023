import { FC } from 'react';
interface IProps {
  error?: string;
}

const FormError: FC<IProps> = ({ error }: IProps) => {
  return <span>{error}</span>;
};

export default FormError;
