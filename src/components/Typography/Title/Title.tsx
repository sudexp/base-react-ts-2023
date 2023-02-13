import { Typography, TypographyProps } from '@mui/material';
import { styled, SxProps } from '@mui/system';

interface IProps extends TypographyProps {
  sx?: SxProps | null;
}

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 500,
  color: theme.palette.success.main,
}));

const Title = ({ sx, children }: IProps) => {
  return (
    <StyledTitle sx={sx} variant='h2' gutterBottom>
      {children}
    </StyledTitle>
  );
};

export default Title;
