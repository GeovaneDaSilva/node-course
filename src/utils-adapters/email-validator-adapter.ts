import * as EmailValidator from 'node-email-validation';
import { IEmailValidator } from "../services/email-validator-adapter";

export class EmailValidatorAdapter implements IEmailValidator {
    isValid (email: string): boolean {
        return EmailValidator.is_email_valid(email)
    }
}