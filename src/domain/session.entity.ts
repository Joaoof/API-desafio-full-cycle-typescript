export type SessionConstructorProps = {
    session_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at: Date;
}


export type SessionCreateCommand = {
    name: string;
    description?: string | null;
    is_active?: boolean;
}


export class Session {
    session_id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;


    constructor(props: SessionConstructorProps) {
        this.session_id = props.session_id;
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
    }

    static create(props: SessionConstructorProps): Session {
        return new Session(props);
    }

    update(props: Partial<SessionCreateCommand>): Session {
        return new Session({ ...this, ...props });
    }
}