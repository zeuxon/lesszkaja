import { AbstractControl, ValidatorFn } from '@angular/forms';

// Csak whitespace-e az input?
export function noWhitespaceMinValidator(minLength:number): ValidatorFn {
  return (control: AbstractControl) => {
    const isWhitespace = ((control.value || '').trim().length === 0)
    const isWhitespaceLongEnough=(control.value || '').trim().length >= minLength;
    return (!isWhitespace && isWhitespaceLongEnough) ? null : { whitespace: true };
  };
}

// Jó email-e?
export function strictEmailValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(control.value) && control.value.length <= 255;

    return valid ? null : { strictEmail: true };
  };
}

// Jó telefonszám?
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const phoneRegex = /^[0-9]{11}$/;
    const valid = phoneRegex.test(control.value) && control.value.length <= 255;

    return valid ? null : { phone: true };
  };
}

export function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const textRegex = /^\S+([" "][\S]+)*$/;
    const valid = textRegex.test(control.value) && control.value.length <= 255;

    return valid ? null : { text: true };
  };
}

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const nameRegex = /^([a-zA-ZéÉíÍüÜőŐáÁúÚóÓ]){3,}([" "]([a-zA-ZéÉíÍüÜőŐáÁúÚóÓ]){3,})*$/;
    const valid = nameRegex.test(control.value) && control.value.length <= 255;

    return valid ? null : { name: true };
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const passwordRegex = /^\S{5,}$/;
    const valid = passwordRegex.test(control.value) && control.value.length <= 255;

    return valid ? null : { password: true };
  };
}

