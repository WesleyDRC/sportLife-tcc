import userConstants from '../constants/userConstants';

function hasMinNameLengthRequired(name: string): boolean {
  if (name.length < 10) return false;

  return true;
}

function hasCorrectEmailFormatRequired(email: string): boolean {
  const [beforeDomain, afterDomain] = email.split('@');

  if (!beforeDomain || !afterDomain) return false;

  return true;
}

function hasMinPasswordLengthRequired(password: string): boolean {
  if (password.length < 10) return false;

  return true;
}

export default function mustAttentionIn(
  email: string,
  password: string,
): void | string {
  // if (!hasMinNameLengthRequired(name)) return userConstants.INVALID_NAME_ERROR;

  if (!hasCorrectEmailFormatRequired(email))
    return userConstants.INVALID_EMAIL_ERROR;

  if (!hasMinPasswordLengthRequired(password))
    return userConstants.INVALID_PASSWORD_ERROR;
}
