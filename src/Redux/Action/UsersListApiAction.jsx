import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTIzMTQzODYsIm5vbmNlIjoiMDE4ZWFkMzAtZTZlYS03NGQ0LWIzZTUtYWMyMzg2ODVkMjRjIiwiaWF0IjoxNzEyMzEwNzg2LCJhdXRoX3RpbWUiOjE3MTIzMDA5MTQsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMjMxMDc4Nn0.TEixfNWxFAVEc3kaiCweNqWApsnHEULfRVfeT7XM7hF5J3kzGRuhv6xkVdP33VVVNJbOf0FOD_pyVN5tCh-siARaLWjaLfJpWzMKFzFG-lBVGEFVG6PBBA-laeCtOU0nBjCyscotCa22H2NbIUXHc0wVxCgN7McMUE_1pWlulwGLsGNxlsMjwUTaLelgUndPcsyrAS65eCsu1ZDfotnIkgb7pcSIr2x0E1iaSDLimEQPhHVaoY_5TCy-WaIWa7yKsK7DTtcGoHLBeFddg97DV7jokceLzVMZa8oRuP87Uq3ZqRKOyEtalk_mWz4Fsx0F9DvBVtgCk2u_GNf8ryCAJw";
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
