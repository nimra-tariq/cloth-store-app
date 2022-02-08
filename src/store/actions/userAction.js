export function actionAddUserDetails(user) {
    return {
        type: 'ADD_USER_DETAILS',
        user: user
    }
}
// user = {
//     uname: 'nimra',
//     uaddress: 'abc',
// }