import * as yup from 'yup';

const Validations = yup.object({
    email: yup.string().nullable().email('Geçerli bir email girin.').required('Zorunlu alan.'),
    password: yup.string().min(5, 'Parolanız en az 5 karakter olmalıdır.').required('Zorunlu alan.'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Parolanız eşleşmelidir.').required('Zorunlu alan.'),
  });

  export default Validations;