declare global {
    import { contains } from './node_modules/@types/validator/index.d';
    namespace jest {
        interface Matchers<R> {
            containsErrorMessages: (expected: Expected) => R;
        }
    }
}