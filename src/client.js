const axios = require('axios');

class Client {

    constructor(login, password) {
        if (login == null || login.length == 0) {
            throw new Error('the login parameter is empty');
        }

        if (password == null || password.length == 0) {
            throw new Error('the password parameter is empty');
        }

       this.login = login;
       this.password = password;

       this.version = 'v1';
       this.baseURI = 'https://api-call2fa.rikkicom.io';
       
       this.version = 'v1';
    }

    makeFullURI(method) {
        return this.baseURI + '/' + this.version + '/' + method + '/';
    }

    receiveJWT() {
        var authData = {
            'login': this.login,
            'password': this.password,
        };

        var uri = this.makeFullURI('auth');

        return axios.create().post(uri, authData)
            .then(function (response) {
                if (response.status == 200) {
                    return response.data.jwt;
                } else {
                    throw new Error('incorrect status code');
                }
            })
            .catch(function (error) {
                throw new Error(error);
            });
    }
   
    info(callID) {
        if (callID == null || callID.length == 0) {
            throw new Error('the callID parameter is empty');
        }

        var uri = this.makeFullURI('call/' + callID);

        return this.receiveJWT().then(function (jwt) {
            var headers = {
                'Authorization': 'Bearer ' + jwt,
            };
            var config = {
                headers: headers,
            };

            return axios.create().get(uri, config)
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    } else {
                        throw new Error('incorrect status code');
                    }
                })
                .catch(function (error) {
                    throw new Error(error);
                });
        })
        .then(function (data) {
            return data;
        });
    }

    call(callTo, callbackURL = '') {
        if (callTo == null || callTo.length == 0) {
            throw new Error('the callTo parameter is empty');
        }

        if (callbackURL == null) {
            throw new Error('the callbackURL parameter is null');
        }

        var uri = this.makeFullURI('call');

        return this.receiveJWT().then(function (jwt) {
            var headers = {
                'Authorization': 'Bearer ' + jwt,
            };
            var config = {
                headers: headers,
            };
            var data = {
                'phone_number': callTo,
                'callback_url': callbackURL,
            };

            return axios.create().post(uri, data, config)
                .then(function (response) {
                    if (response.status == 201) {
                        return response.data;
                    } else {
                        throw new Error('incorrect status code');
                    }
                })
                .catch(function (error) {
                    throw new Error(error);
                });
        })
        .then(function (data) {
            return data;
        });
    }

    callViaLastDigits(callTo, poolID, useSixDigits = false) {
        if (callTo == null || callTo.length == 0) {
            throw new Error('the callTo parameter is empty');
        }

        if (poolID == null || poolID.length == 0) {
            throw new Error('the poolID parameter is empty');
        }

        if (useSixDigits == null) {
            throw new Error('the useSixDigits parameter is null');
        }

        if (useSixDigits) {
            var uri = this.makeFullURI('pool/' + poolID + '/call/six-digits');
        } else {
            var uri = this.makeFullURI('pool/' + poolID + '/call');
        }

        return this.receiveJWT().then(function (jwt) {
            var headers = {
                'Authorization': 'Bearer ' + jwt,
            };
            var config = {
                headers: headers,
            };
            var data = {
                'phone_number': callTo,
            };

            return axios.create().post(uri, data, config)
                .then(function (response) {
                    if (response.status == 201) {
                        return response.data;
                    } else {
                        throw new Error('incorrect status code');
                    }
                })
                .catch(function (error) {
                    throw new Error(error);
                });
        })
        .then(function (data) {
            return data;
        });
    }

    callWithCode(callTo, code, lang) {
        if (callTo == null || callTo.length == 0) {
            throw new Error('the callTo parameter is empty');
        }

        if (code == null || code.length == 0) {
            throw new Error('the code parameter is empty');
        }

        if (lang == null || lang.length == 0) {
            throw new Error('the lang parameter is null');
        }

        var uri = this.makeFullURI('code/call');

        return this.receiveJWT().then(function (jwt) {
            var headers = {
                'Authorization': 'Bearer ' + jwt,
            };
            var config = {
                headers: headers,
            };
            var data = {
                'phone_number': callTo,
                'code': code,
                'lang': lang,
            };

            return axios.create().post(uri, data, config)
                .then(function (response) {
                    if (response.status == 201) {
                        return response.data;
                    } else {
                        throw new Error('incorrect status code');
                    }
                })
                .catch(function (error) {
                    throw new Error(error);
                });
        })
        .then(function (data) {
            return data;
        });
    }
}

module.exports = {Client: Client};
