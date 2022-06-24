import { FormikValues, useFormik } from 'formik';

export interface FieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  hasError: boolean;
  error?: string;
}

export function getCommonFieldProps<Values extends FormikValues>(
  form: ReturnType<typeof useFormik<Values>>,
  fieldName: keyof Values
): FieldProps {
  const fieldProps = form.getFieldProps(fieldName);
  const fieldMeta = form.getFieldMeta(fieldName as string);

  return {
    value: fieldProps.value,
    onChange: form.handleChange(fieldName),
    onBlur: () =>
      fieldProps.onBlur({
        target: {
          name: fieldName,
        },
      }),
    hasError: fieldMeta.touched && !!fieldMeta.error,
    error: fieldMeta.touched ? fieldMeta.error : undefined,
  };
}
