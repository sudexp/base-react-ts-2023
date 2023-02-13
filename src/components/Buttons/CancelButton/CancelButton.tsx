import { Button, ButtonProps } from '@mui/material';
import { styled, SxProps } from '@mui/system';

interface IProps extends ButtonProps {
  sx: SxProps;
}

const StyledButton = styled(Button)<ButtonProps>(({ color }) => ({
  textTransform: 'lowercase',
  color,
}));

const CancelButton = ({ sx, color, children, ...rest }: IProps) => {
  return (
    <StyledButton sx={sx} variant='text' size='medium' color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default CancelButton;
