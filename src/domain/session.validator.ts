import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Session } from './session.entity';
import { SessionValidatorFields } from '../shared/domain/validators/class.validator-fields'
export class SessionRules {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string | null;

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean;

    constructor({ name, description, is_active }: Session) {
        Object.assign(this, { name, description, is_active });
    }
}

export class SessionValidator extends SessionValidatorFields<SessionRules> {
    validate(entity: Session) {
        return super.validate(new SessionRules(entity));
    }

}

export class SessionValidatorFactory {
    static create() {
        return new SessionValidator();
    }
}  