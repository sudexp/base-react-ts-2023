import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';

import InputControlled from 'components/Form/InputControlled';
import HiddenFieldControlled from 'components/Form/HiddenFieldControlled';
import { isObjectEmpty } from 'utils/isObjectEmpty';
import { IPost } from 'interfaces/post';

import { schema } from './schema';


interface IProps {
  data?: IPost;
  handleClose: () => void;
  // eslint-disable-next-line no-unused-vars
  handlePostUpdate: (data: IPost) => void;
}

const PostForm: FC<IProps> = ({ data, handleClose, handlePostUpdate }: IProps) => {
  const id = data?.id;
  const title = data?.title;
  const body = data?.body;

  const methods = useForm<IPost>({
    defaultValues: { title, body },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IPost> = (data: IPost) => {
    handlePostUpdate(data);
    handleClose();
  };

  const onCancel = () => {
    handleClose();
    methods.reset();
  };

  const isDirty = !isObjectEmpty(methods.formState.dirtyFields); // works better than next
  // const isDirty = methods.formState.isDirty;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <HiddenFieldControlled name='id' defaultValue={id} />
        <InputControlled name='title' defaultValue={title} />
        <InputControlled name='body' defaultValue={body} />
        <Button disabled={!isDirty} type='submit'>
          Submit
        </Button>
        {/* Me be cancel button should be on Modal */}
        <Button onClick={onCancel}>Cancel</Button>
      </form>
    </FormProvider>
  );
};

export default PostForm;
