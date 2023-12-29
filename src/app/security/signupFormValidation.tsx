import buildAuthToken from '@/app/utils/securityUtil'

let isUserValid = {
    user: true,
    email: true,
    password: true,
    phone: true
};

let errors = {
    user: "",
    email: "",
    password: "",
    phone: ""
};

function handleTakenCredentials() {
    isUserValid.name = false;
    isUserValid.email = false;
    errors.name = 'username is already taken';
    errors.email = 'email already taken!';
    return;
}

function handleInvalidCredentials(responseBody: any) {
    if (responseBody.name !== undefined) {
        isUserValid.name = false;
        errors.name = responseBody.name;
    }
    if (responseBody.email !== undefined) {
        isUserValid.email = false;
        errors.email = responseBody.email;
    }
    if (responseBody.password !== undefined) {
        isUserValid.password = false;
        errors.password = responseBody.password;
    }
    return;
}


function handleAuth(userDTO: any) {
    const authToken = buildAuthToken(userDTO);
    localStorage.setItem("Authorization", authToken);
    localStorage.setItem('email', userDTO.email)
}


function signupServerFormValidation(responseStatus: number, responseBody: any, userDTO: any) {

    isUserValid = {
        name: true,
        email: true,
        password: true,
        phone: true
    };

    errors = {
        name: "",
        email: "",
        password: "",
        phone: ""
    };

    switch (responseStatus) {
        case 200:
            handleAuth(userDTO);
            break;
        case 400:
            handleInvalidCredentials(responseBody);
            break;
        case 401:
            handleTakenCredentials();
            break;
        case 404:
            break;
        default:
            break;
    }

    return {isUserValid, errors};
}


export default signupServerFormValidation;