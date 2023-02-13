import { FC } from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import styles from './Toast.module.css';

interface IProps {
  autoClose?: number;
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
  newestOnTop?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
}

const contextClass = {
  success: `Toastify__toast ${styles.success}`,
  error: `Toastify__toast ${styles.error}`,
  info: `Toastify__toast ${styles.info}`,
  warning: `Toastify__toast ${styles.warning}`,
  dark: `Toastify__toast ${styles.dark}`,
  default: `Toastify__toast ${styles.default}`,
};

const Toast: FC<IProps> = ({
  autoClose = 3000,
  position = 'top-center',
  newestOnTop = true,
  draggable = true,
  pauseOnHover = true,
}: IProps) => {
  return (
    <ToastContainer
      autoClose={autoClose}
      position={position}
      newestOnTop={newestOnTop}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
      transition={Slide}
      toastClassName={param => contextClass[param?.type || 'default']}
    />
  );
};

export default Toast;
