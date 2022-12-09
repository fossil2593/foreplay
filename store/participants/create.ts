const generateKey = () => {
    const candidates = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    let key = '';

    for (let index = 0; index < 12; index++) {
        key += candidates[Math.floor(Math.random() * ((candidates.length - 1) - 0 + 1))]
    }

    return key;
};

export const createParticipant = () => ({
    name: '',
    key: generateKey(),
});