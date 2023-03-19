import userConstants from '../constants/userConstants';

function hasCorrectEmailFormatRequired(email: string): boolean {
  const [beforeDomain, afterDomain] = email.split('@');

  if (!beforeDomain || !afterDomain) return false;

  return true;
}

function hasMinPasswordLengthRequired(password: string): boolean {
  if (password.length < 5) return false;

  return true;
}

function isCorrectPassword(password: string, confirmPassword: string): boolean {
  if(password !== confirmPassword) return false;

  return true
}

export default function mustAttentionIn(
  email: string,
  password: string,
  confirmPassword: string
): void | string {

  if (!hasCorrectEmailFormatRequired(email))
    return userConstants.INVALID_EMAIL_ERROR;

  if (!hasMinPasswordLengthRequired(password))
    return userConstants.INVALID_PASSWORD_ERROR;

  if(!isCorrectPassword(password, confirmPassword))
    return userConstants.INVALID_CORRECT_PASSWORD
}
