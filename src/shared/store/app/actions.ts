import { Locale } from './types';

export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
    SETSESSIOIN: 'app/set-session',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});

export const setSession = (session: String) => ({
    type: ActionTypes.SETSESSIOIN,
    payload: session,
});
