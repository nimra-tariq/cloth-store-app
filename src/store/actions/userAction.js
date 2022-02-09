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
export function actionResetUser()
{
    return{
        type:'RESET_USER'
    }
}