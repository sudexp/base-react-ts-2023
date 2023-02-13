import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface IProps {
  title: string;
  description: string;
  name: string;
  type: string;
}

// TODO: check and finnish oll meta tags needed
const SEO: FC<IProps> = ({ title, description, name, type }: IProps) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default SEO;
