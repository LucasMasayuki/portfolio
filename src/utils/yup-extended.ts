import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';

const isValidEmail = (email: string): boolean => {
  const re =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
  return re.test(email);
};

yup.addMethod<yup.StringSchema>(
  yup.string,
  'email',
  function yupEmailValidation(errorMessage) {
    return this.test(function validateEmail(value: string | undefined) {
      const { path, createError } = this;

      return (
        isValidEmail(value ?? '') ||
        createError({ path, message: errorMessage })
      );
    });
  }
);

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    email(errorMessage: string): StringSchema<TType, TContext>;
  }
}

export default yup;
