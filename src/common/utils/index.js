import { DEFAULT_LOCALE } from '../constants';

export const getLang = () => {
    const lang = (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage ||
        DEFAULT_LOCALE;

    return lang.split('-')[0];
};

export function flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        let value = nestedMessages[key]
        let prefixedKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'string') {
            messages[prefixedKey] = value
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }
        return messages
    }, {})
}