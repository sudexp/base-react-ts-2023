import { FC } from 'react';

interface IProps {
  text: string;
}

const Boom: FC<IProps> = ({ text }: IProps) => {
  if (text === 'bomb') throw new Error('💥 CABOOM 💥');

  return <p>No error</p>;
};

export default Boom;
