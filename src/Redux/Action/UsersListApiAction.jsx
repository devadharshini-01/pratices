import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTIyMzk4OTQsIm5vbmNlIjoiMDE4ZWE3ZGMtZDk2MS03ZWZlLTgyMDktNzFhYmRjZjYxMDg2IiwiaWF0IjoxNzEyMjM2Mjk0LCJhdXRoX3RpbWUiOjE3MTIyMTE1MTgsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMjIzNjI5NH0.SGAXmgWav_aVe3gJe8wVwLfCsmDCb9pWQCWqD2wpy5drBUpMGg9OBYnzY354EIh5Sh25beXTz2RGpogfiiL6OH_Lx4Sxwo9TuZERsnVIc3Z-aBzGUGtEiU5NIK927r-6hfQpFE_tKLS2Ag_7WvuR1lcISUuZ4M7eUJSRzLecwo11A864IdGb0BxLbr4tJlZf0RUypz7pjKq1AGNwKbNSj8T4pW3IU_8iABmg5hNgcQ9jxpwxrg09_9Z1IYurT3Lsw4FgNSwWuHMx82MFXnJkKY9SgwFsBAhrcIDv9SmpGXHgjLZsXdhdEOu7DmOqVR8LJR7GrnoRajNRQrZyyxfySw"
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
