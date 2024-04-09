import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTIzMjcyNjAsIm5vbmNlIjoiMDE4ZWFkMzAtZTZlYS03NGQ0LWIzZTUtYWMyMzg2ODVkMjRjIiwiaWF0IjoxNzEyMzIzNjYwLCJhdXRoX3RpbWUiOjE3MTIzMDA5MTQsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMjMyMzY2MH0.FzYiXfNXvez0Pc0pwy3LlJFUlJzwsfQyKu5c3wooiBo6svm9xk_oEn-wCwJ9L25N3DopH2V8x8-EnBAjpJo0Ycag0Yaw1v7reSSEp0I7TkLQ2Rkac1LNdzt3tAsA9VRQ_F8yj965gZHIkF6TNSVmuV5ahz1HzpqMFSzjWh93Lpo-Uo9n7y7SJeZsKOGHA70lwGPpeyKMFX6oX44Pl9nryYhN9rc4PPekoLXGp-vdr9k9RzLUiw1-vSPsK9A5_ixWsSWrHbdoezOtBzVckJq4X4AxzWV1RaTqGkeXNyDPH4uhH938S9oT5w-HBj3wK8qv3Gxhn1RQ1F1Tg4J39q0jnA";
  await dispatch({
    type: userlistdata.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.post(
      "https://dev-vinifera-function.azurewebsites.net/api/getUsers",
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    await dispatch({
      type: userlistdata.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch (error) {
    await dispatch({
      type: userlistdata.ERROR,
      payload: { loading: false, data: [], error: error?.response?.data },
    });
  }
  await dispatch({
    type: userlistdata.RESET,
    payload: {},
  });
};
