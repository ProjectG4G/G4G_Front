export const setRegister = (cb, form) => {
    const {passwordСonfirm, ...oldForm} = form;
    const newForm = {...oldForm, password2: passwordСonfirm, phone_number : ''};
   
    cb(newForm);
};