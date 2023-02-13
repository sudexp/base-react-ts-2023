import { Typography, TypographyProps } from '@mui/material';
import { styled, SxProps } from '@mui/system';

interface IProps extends TypographyProps {
  sx?: SxProps | null;
}

const StyledHeader = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

const Header = ({ sx, children }: IProps) => {
  return (
    <StyledHeader sx={sx} variant='h1' gutterBottom>
      {children}
    </StyledHeader>
  );
};

export default Header;
