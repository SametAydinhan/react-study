import * as yup from 'yup';

const Validations = yup.object({
    email: yup.string().nullable().email().required(),
    password: yup.string().min(5).required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')]).required(),
  });

  export default Validations;