import { Entity } from "../shared/domain/entity";
import { EntityValidationError } from "../shared/domain/validators/validation-errors";
import { ValueObject } from "../shared/domain/value-object";
import { Uuuid } from "../shared/domain/value-objects/uuid.vo";
import { SessionValidatorFactory } from "./session.validator";

export type SessionConstructorProps = {
    session_id?: Uuuid;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
}


export type SessionCreateCommand = {
    name: string;
    description?: string | null;
    is_active?: boolean;
}


export class Session extends Entity {
    session_id: Uuuid;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | null;


    constructor(props: SessionConstructorProps) {
        super();
        this.session_id = props.session_id ?? new Uuuid();
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
    }

    get entity_id(): ValueObject {
        return this.session_id;
    }

    static create(props: SessionCreateCommand): Session {
        const session = new Session(props);
        Session.validate(session);
        return session;
    }

    changeName(name: string): void {
        this.name = name;
        Session.validate(this);

    }

    changeDescription(description: string): void {
        this.description = description;
        Session.validate(this);
    }

    activate(): void {
        this.is_active = true;
    }

    deactivate(): void {
        this.is_active = false;
    }

    static validate(entity: Session) {
        const validator = SessionValidatorFactory.create();
        const isValid = validator.validate(entity);
        if (!isValid) {
            throw new EntityValidationError(validator.errors);
        }
    }

    toJSON() {
        return {
            session_id: this.session_id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at,
        }
    }
}