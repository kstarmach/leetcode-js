class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        return this.result += value;
        // return value + this.result;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        return this.result -= value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        return this.result *= value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value == 0) throw new Error("Division by zero is not allowed");
        return this.result /= value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        return this.result **= value;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}