const lChars = 'abcdefghijklmnopqrstuvwxyz'
const hChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nChars = '0123456789'
const sChars = '-_&%$#@!'

const english = /^[A-Za-z]*$/ //regular Exprission
const numbers = /^[0-9]*$/  //regular Exprission

export const passwordValidation = (password) => {
    //console.log(password)
    let array = lChars.split('')
    let hasLChar = false
    for (let i = 0; i < array.length; i++) {
        if (password.includes(array[i])) {
            hasLChar = true
            break;
        }
    }

    array = hChars.split('')
    let hasHChar = false
    for (let i = 0; i < array.length; i++) {
        if (password.includes(array[i])) {
            hasHChar = true
            break;
        }
    }

    array = nChars.split('')
    let hasNChar = false
    for (let i = 0; i < array.length; i++) {
        if (password.includes(array[i])) {
            hasNChar = true
            break;
        }
    }

    array = sChars.split('')
    let hasSChar = false
    for (let i = 0; i < array.length; i++) {
        if (password.includes(array[i])) {
            hasSChar = true
            break;
        }
    }

    if (!hasHChar || !hasLChar || !hasNChar || !hasSChar) {
        return false
    }
    else {
        return true
    }
}

export const emailValidation = (email) => {
    if (!email.includes('@') || email.includes(' '))
        return false

    return true
}

export const nameValidation = (name) => {
    let isName = english.test(name)

    if (isName) return true
    else false
}

export const phoneValidation = (phone) => {
    let isNumber = numbers.test(phone)

    if (!isNumber) return false
    if (!phone[0] + phone[1] === '01' || !phone.length === 11) return false //01226367275

    return true
}