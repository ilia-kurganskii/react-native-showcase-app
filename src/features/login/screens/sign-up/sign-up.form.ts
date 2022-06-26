import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getCommonFieldProps } from '../../../common/utils/form-utils';

export const SignUpFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export interface SignUpFormValues {
  email: string;
  password: string;
}

export function useSignUpForm(onSubmit: (values: SignUpFormValues) => void) {
  const form = useFormik<SignUpFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignUpFormSchema,
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
