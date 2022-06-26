import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getCommonFieldProps } from '../../../common/utils/form-utils';

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export interface LoginFormValues {
  email: string;
  password: string;
}

export function useLoginForm(onSubmit: (values: LoginFormValues) => void) {
  const form = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: onSubmit,
  });

  const emailField = getCommonFieldProps(form, 'email');
  const passwordField = getCommonFieldProps(form, 'password');

  return {
    emailField,
    passwordField,
    submitForm: form.submitForm,
  };
}
