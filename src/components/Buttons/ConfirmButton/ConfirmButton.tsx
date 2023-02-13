import { Button, ButtonProps } from '@mui/material';

const ConfirmButton = ({ children, ...rest }: ButtonProps) => (
  <Button variant='contained' size='medium' {...rest}>
    {children}
  </Button>
);

export default ConfirmButton;
