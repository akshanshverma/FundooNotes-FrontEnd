import axios from 'axios';

export default class UserServices {
    /**
     * 
     * 
     * @param {array} userData 
     */
    registerUser(userData) {
        return axios.post('/api/register', userData)
            .then((response) => {
                //console.log('check',response);
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

    loginUser(userData) {
        return axios.post('/api/login', userData)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.success.token);
                    localStorage.setItem('username', response.data.success.userData.username);
                    localStorage.setItem('email', response.data.success.userData.email);
                    localStorage.setItem('profile_image', response.data.success.userData.profile_image);
                }
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

    getUsrData() {
        var auth = "Bearer ".concat(localStorage.getItem('token'))
        return axios.get('/api/getDetails', { headers: { Authorization: auth } })
            .then((response) => {

                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

    logoutUser() {

        var auth = "Bearer ".concat(localStorage.getItem('token'))
        return axios.get('/api/logout', { headers: { Authorization: auth } })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    localStorage.removeItem('email');
                    localStorage.removeItem('profile_image');
                }
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

    forgetPassword(resetData) {
        return axios.post('/api/password/create', resetData)
            .then((response) => {
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

    getTokenData(token) {
        return axios.get('/api/password/find/' + token)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    changePassword(userData) {
        return axios.post('/api/password/reset', userData)
            .then((response) => {
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }
    verifyToken(token) {
        return axios.get('/api/verifymail/' + token)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    ckeckVerify(token) {
        return axios.get('/api/checkverification/' + token)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    }


    socialLogin(userData) {
        return axios.post('/api/loginWithSocialAccoount', userData)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.success.token);
                    localStorage.setItem('username', response.data.success.userData.username);
                    localStorage.setItem('email', response.data.success.userData.email);
                    localStorage.setItem('profile_image', response.data.success.userData.profile_image);
                }
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

    uploadImage(imageData) {
        var auth = "Bearer ".concat(localStorage.getItem('token'))
        return axios.post('/api/uploadProfileImage',imageData, { headers: { Authorization: auth } })
            .then((response) => {
                localStorage.setItem('profile_image', response.data.success);
                return response;
            }
            )
            .catch((error) => {
                return error;
            });
    }

}