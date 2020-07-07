// enum 은 속성을 지정해주지 않으면 자동으로 숫자를 배정해줌

export enum CellValue {
    none,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    bomb
}

export enum CellState {
    open,
    visible,
    flagged
}

export type Cell = { value: CellValue, state: CellState };