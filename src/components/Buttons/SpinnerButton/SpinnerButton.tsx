import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

const SpinnerButton = ({ loading, children, ...rest }: LoadingButtonProps) => {
  return (
    <LoadingButton loading={loading} loadingPosition='end' endIcon={<SendIcon />} {...rest}>
      <span>{children}</span>
    </LoadingButton>
  );
};

export default SpinnerButton;
