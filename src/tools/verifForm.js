// @flow

const verifForm = (
  name: string,
  email: string,
  textarea: string,
  textAreaMax: number
) => {
  let error = {};
  if (name.length === 0) {
    error.name = 'error.nameNotProvided';
  }
  if (name.length > 16) {
    error.name = 'error.nameTooLong';
  }
  if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    error.email = 'error.emailNotMatch';
  }
  if (email.length === 0) {
    error.email = 'error.emailNotProvided';
  }
  if (textAreaMax < 0) {
    error.textarea = 'error.textareaMax';
  }
  if (!textarea) {
    error.textarea = 'error.textareaNotProvided';
  }

  return error;
};

export default verifForm;
