import { OperatorProps } from "../../components/operator/Operator";

export function count(counter: string | number, value: string, operator: OperatorProps) {
    switch (operator.name) {
        case 'minus':
            if ((+value - +counter).toString().length > 7) {
                return (+value - +counter).toFixed(4)
            } else return (+value - +counter)
        case 'plus':
            if ((+value + +counter).toString().length > 7) {
                return (+value + +counter).toFixed(4)
            } else return (+value + +counter)
        case 'multiply':
            if ((+value * +counter).toString().length > 7) {
                return (+value * +counter).toFixed(4)
            } else return (+value * +counter)
        case 'divide':
            if (+counter === 0) return 'Нельзя'
            if ((+value / +counter).toString().length > 7) {
                return (+value / +counter).toFixed(4)
            } else return (+value / +counter)
        case 'none':
            return +value
    }
}