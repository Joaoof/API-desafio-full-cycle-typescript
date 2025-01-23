import { Uuuid } from "../../shared/domain/value-objects/uuid.vo";
import { Session } from "../session.entity";

describe("Session Unit Test", () => {
    describe('constructor', () => {
        test('should create a new session with default values', () => {
            const session = new Session({
                name: 'Session 1',
            });
            expect(session.session_id).toBeInstanceOf(Uuuid);
            expect(session.name).toBe('Session 1');
            expect(session.description).toBeNull();
            expect(session.is_active).toBeTruthy();
            expect(session.created_at).toBeInstanceOf(Date);
        });

        test('should create a new session with provided values', () => {
            const created_at = new Date;

            const session = new Session({
                name: 'Session 1',
                description: 'Description',
                is_active: false,
                created_at
            })

            expect(session.session_id).toBeInstanceOf(Uuuid);
            expect(session.name).toBe('Session 1');
            expect(session.description).toBe('Description');
            expect(session.is_active).toBeFalsy();
            expect(session.created_at).toBe(created_at);
        });

        test('should create a new session value name and description', () => {
            const session = new Session({
                name: 'Session 1',
                description: 'Description',
            });

            expect(session.name).toBe('Session 1');
            expect(session.description).toBe('Description');
        });
    });
});

describe("create command", () => {
    test("should create a session", () => {
        const session = Session.create({
            name: 'Session 1',
        });
        expect(session.session_id).toBeInstanceOf(Uuuid);
        expect(session.name).toBe('Session 1');
        expect(session.description).toBeNull();
        expect(session.is_active).toBeTruthy();
        expect(session.created_at).toBeInstanceOf(Date);
    });

    describe("category_id field", () => {
        const arrange = [
            {
                session_id: null,
            },
            {
                session_id: undefined
            },
            {
                session_id: new Uuuid()
            }
        ]

        test.each(arrange)("id = %j", ({ session_id }) => {
            const session = new Session({
                name: 'Session 1',
                session_id: session_id as any,
            });
            expect(session.session_id).toBeInstanceOf(Uuuid);
            if (session_id) {
                expect(session.session_id).toBe(session_id);
            }
        });
    });

    test("should create a category with description", () => {
        const session = Session.create({
            name: 'Session 1',
            description: 'Description',
        });
        expect(session.name).toBe('Session 1');
        expect(session.description).toBe('Description');
        expect(session.is_active).toBeTruthy();
        expect(session.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with is_active", () => {
        const session = Session.create({
            name: 'Session 1',
            is_active: false,
        });
        expect(session.name).toBe('Session 1');
        expect(session.description).toBeNull();
        expect(session.is_active).toBeFalsy();
        expect(session.created_at).toBeInstanceOf(Date);
    });
});

describe("category_id field", () => {
    test("should change the name of the session", () => {
        const session = Session.create({
            name: 'Session 1',
        })
        session.changeName('Session 2');
        expect(session.name).toBe('Session 2');
    });

    test("should change the description of the session", () => {
        const session = Session.create({
            name: 'Session 1',
        })
        session.changeDescription('Description');
        expect(session.description).toBe('Description');
    });


    test("should activate the session", () => {
        const session = Session.create({
            name: 'Session 1',
            is_active: false,
        })
        session.activate();
        expect(session.is_active).toBeTruthy();
    });

    test("should deactivate the session", () => {
        const session = Session.create({
            name: 'Session 1',
            is_active: true,
        });

        session.deactivate();
        expect(session.is_active).toBeFalsy();
    });
}); 