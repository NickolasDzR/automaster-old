const regExEmail = new RegExp(/^[a-zA-Z\d\\.\-]+\@[a-zA-Z\d\\.\-]+\.[a-zA-Z]+$/);

const email = ['email@email.ru',
    '123myemail@yahoo.com',
    'email1323%$-@google.com',
    'user.ru',
    'user@ru',
    'user@user.123',
    'user@user.$ru',
    'user@user.1ru',
    '',
]

test('regExEmail', () => {
    expect(regExEmail.test(email[0])).toBe(true);
    expect(regExEmail.test(email[1])).toBe(true);
    expect(regExEmail.test(email[2])).toBe(false);
    expect(regExEmail.test(email[3])).toBe(false);
    expect(regExEmail.test(email[4])).toBe(false);
    expect(regExEmail.test(email[5])).toBe(false);
    expect(regExEmail.test(email[6])).toBe(false);
    expect(regExEmail.test(email[7])).toBe(false);
    expect(regExEmail.test(email[8])).toBe(false);
})
