import { BASE_BACKEND_URL } from '../constants/end-points';
import buildAuthToken from '../utils/securityUtil';

class LoginController {
  sendPostRequest (payload: Object, endPoint: string) {
    const url = BASE_BACKEND_URL + endPoint;
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    headers.append('Authorization', buildAuthToken(payload)!)
    return fetch(url, {
      method: 'GET',
      headers: headers
    })
  }
}

const loginController = new LoginController()
export default loginController;