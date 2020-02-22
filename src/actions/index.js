function setMoney(money) {
    return {
        type: "WITH_DRAW_MONEY",
        amount: money
    }
}

export { setMoney };