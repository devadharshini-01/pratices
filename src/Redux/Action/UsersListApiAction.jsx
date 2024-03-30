import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTE4MDE5MjMsIm5vbmNlIjoiMDE4ZThkYjYtM2ZkOS03N2M5LTkwNmItODFjYTk4OGYzYTNkIiwiaWF0IjoxNzExNzk4MzIzLCJhdXRoX3RpbWUiOjE3MTE3NzI4NTAsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMTc5ODMyM30.DADhK0WEJUtg1cT7fQ7x0oV00gRFCE8VzHrcjKcUXD018kWEVxdnYgc4IwMqMc3K8Ocfd-pDe9QuohC0k0kru03vU47e7WVziYCsn9JQe5BvGs71lLGjVMVGT3nYm7D5eoViCl1iC7-jPLCvCVS-oWZdo3CewS30mqC4n53aN-us27BVq5OKfCp8_WBXwoRB3asHuZ5DKkeR4jHUxzim6Y8De9JLGViI90D3mSVSLd-ywnM_JhMJzbZ_OW7GFnz9jQu_c5YtFwT4F9qUXoZNXHMSj4soOsqYxSbGLWJ3jo-kDv_A1s68q8-1MApVmX87Jm4eRVhyOpjs0QDUbsZN4w"
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
    payload: { },
  });
};
