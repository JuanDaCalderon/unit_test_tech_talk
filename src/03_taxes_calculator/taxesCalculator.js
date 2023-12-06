let taxes = 0.19;
export class TaxesCalculator {
    result = 0

    /**
     * This adds the value with its respective tax, 
     * which if it is less than 56000 the tax is 0.19 
     * but if it is greater than 56000 the tax will be 0.14
     * @param {number} value
     * @returns {number} the result of the operation (value+value*taxes)
     */
    addWithTaxes(value) {
        if (value > 56000) {
            taxes = 0.14;
        }
        this.result = value + (value * taxes);
    }
}