
/**
 * Response Object
 * @param {Boolean} isSuccess if the request was succesful
 * @param {String} errorName the kind of error the server had
 * @param {Object} data the dta to be returned
 */
class Response {
    constructor(isSuccess, errorName, data) {
        this.isSuccess = isSuccess;
        this.errorName = errorName;
        this.data = data;
    }
}

module.exports = { Response }