import validator from 'email-validator'
import { IEmailValidator } from "../services/email-validator-adapter";

export class EmailValidatorAdapter implements IEmailValidator {
    isValid (email: string): boolean {
        return validator.validate(email)
    }
}