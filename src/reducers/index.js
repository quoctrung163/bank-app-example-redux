function reducer(state, action) {
    switch (action.type) {
        case "WITH_DRAW_MONEY":
            return {
                ...state,
                totalAmount: state.totalAmount - Number(action.amount),
                username: "Rut tien d ban"
            }
        default:
            return state;
    }
}

export default reducer;