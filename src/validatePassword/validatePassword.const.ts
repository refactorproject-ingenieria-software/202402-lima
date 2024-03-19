import { Validations } from './validatePassword.types';

export const validations: Validations[] = [
  {
    isValid: (password: string) => password.length >= 8,
    errorMessage: 'Password must be at least 8 characters',
  },
  {
    isValid: (password: string) => /(?:.*\d){2,}/.test(password),
    errorMessage: 'Password must contain at least 2 numbers',
  },
  {
    isValid: (password: string) => /[A-Z]/.test(password),
    errorMessage: 'Password must contain at least one capital letter',
  },
  {
    isValid: (password: string) =>
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    errorMessage: 'Password must contain at least one special character',
  },
];
