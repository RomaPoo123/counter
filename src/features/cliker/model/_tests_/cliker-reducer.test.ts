import { clikerReducer, IncrementAC, initialStateType, InstallationAC, ResetAC } from "../cliker-reducer"



let startState: initialStateType = { click: 0, maxValue: 0, startValue: 1 };

beforeEach(() => {
    startState = {
        startValue: 2,
        maxValue: 6,
        click: 2
    }
})


test("increment click", () => {
    const endState = clikerReducer(startState, IncrementAC());

    expect(endState.click).toBe(3)
    expect(endState.maxValue).toBe(6)
})

test("reset click", () => {
    startState.click = 5;
    const endState = clikerReducer(startState, ResetAC());

    expect(endState.click).toBe(2)

})

test("install maxValue and startValue", () => {
    const endState = clikerReducer(startState, InstallationAC(10, 4));

    expect(endState.click).toBe(4)
    expect(endState.maxValue).toBe(10)
    expect(endState.startValue).toBe(4)

})