import { netBillState } from '../state/netBillState'
const initialState = netBillState;

export function netBillReducer(state = initialState, action) {

    switch (action.type) {
        //net bill
        case 'ADD_TOTAL_BILL':
            return {
                ...state,
                totalBill: action.payload
            }
        default:
            return state;
    }
}