import loginButton from '../../src/reducers/loginButton';
import { TOGGLE_LOGIN_BUTTON } from '../../src/actions/index';

describe('Login Button', () => {
    it('has default state', () => {
        expect(loginButton(undefined, { type: 'unexpected' })).toEqual({
            loggedIn: false
        });
    });

    it('can handle default TOGGLE_LOGIN_BUTTON', () => {
        expect(loginButton(undefined, {
            type: TOGGLE_LOGIN_BUTTON
        })).toEqual({
            loggedIn: true
        });
    });

    it('can handle TOGGLE_LOGIN_BUTTON to true', () => {
        expect(loginButton(true, {
            type: TOGGLE_LOGIN_BUTTON
        })).toEqual({
            loggedIn: true
        });
    });

    // it('can handle TOGGLE_LOGIN_BUTTON to false', () => {
    //     expect(loginButton(true, {
    //         type: TOGGLE_LOGIN_BUTTON
    //     })).toEqual({
    //         loggedIn: false
    //     });
    // });
});

// https://www.youtube.com/watch?v=jB0_nl7aKqA&feature=em-subs_digest
