/**
 * This tool is to handle all server communication.
 */
class CommunicationService {
    constructor() {
        this.baseUrl = '';       //server's url
    }

    /**
     * Gets data from an API end-point.
     * 
     * @param {String} url The url to request from.
     * 
     * @returns {Promise} The server response as a promise
     */
    static sendRequest(url) {
        return fetch(url).then(response => {
            return response.json();
        }).catch((err) => {
            console.log(`Failed to get data from endpoint ${url}, reason: \n ${err}`)
        });
    }

    static sendData(url, data) {
        console.log(`Sending ${data.email} ${data.password}to ${url}`)
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            return response.json();
        }).catch((err) => {
            console.log(`Failed to get data from endpoint ${url}, reason: \n ${err}`)
        });
    }
}

export default CommunicationService;
