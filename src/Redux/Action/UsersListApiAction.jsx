import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTE3MTQ4NTAsIm5vbmNlIjoiMDE4ZTg4YzYtNDRmNS03MGNkLWI0OGMtMzAzZDExYTBmOWRhIiwiaWF0IjoxNzExNzExMjUwLCJhdXRoX3RpbWUiOjE3MTE2OTE3NjQsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMTcxMTI1MH0.RhZdBTr2AWE_qbMeJuu2FltoW8H4Q7KnjqtDtvz7eZY5cdNAtInHEV6Ie29xXZIM7wV5a396c_GH4R4RefrsTa401mjo1Y1aqybG_zj0hNOIb-s2Pm6gpEOV0XdEVB8TMiMZeyLX_iMRnoasGwDXqt9I4UEL_NMKPXHPbaRIDF6EI64fe-O8mmN6wy610khc96TT_V_Cbp5igdI4bzJlDkinrkCZxx1bhdMksXo5RmdTHXKRt9FXjRe-UOaDNRwxKq6UVdsPjctBXc2yK92dJOj0GbTAHNWhk8mlAn3RjAfrbccUeDgkh2K6HvOpSZPZLwbkMmIT6wpGFgRpX3YTQg"
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
