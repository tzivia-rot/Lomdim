
export function updatePhone(newPhone) {
    return {type:'UPDATE_PHONE', payLoad: newPhone}
}

export function updatePassword(newPassword) {
    return {type:'UPDATE_PASSWORD', payLoad: newPassword}
}

export function addUser(newUser) {
    return {type:'ADD_USER', payLoad: newUser}
}