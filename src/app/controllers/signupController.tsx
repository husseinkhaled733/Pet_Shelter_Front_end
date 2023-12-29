import { BASE_BACKEND_URL } from "../constants/end-points";

class SignupController {
  sendPostRequest (payload: Object, endPoint: string): Promise<Response> {
    const url = BASE_BACKEND_URL + endPoint;
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: headers
    });
  }
}

const signupController = new SignupController()
export default signupController;