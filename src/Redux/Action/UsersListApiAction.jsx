import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTI5MzE0MjgsIm5vbmNlIjoiMDE4ZWQyMTktMmRhYy03MzMzLTg5Y2UtM2FlNDNlZWQxMzkxIiwiaWF0IjoxNzEyOTI3ODI4LCJhdXRoX3RpbWUiOjE3MTI5MjAxMjIsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMjkyNzgyOH0.TOY27nYo9AsVmdAU6rOuq07A1qLspcrSj_vJdf1S1Px9owYn9JvEwG3qs2ltV7L9vPQss64zRC7Af0Fg-HFSe5QrKM2bUftLmS3EHSvc89VFhxOQmDPDGWVJjMsanHxXV-2ltn27J1P0xHyKxULH_BSvKa6QgMxEO1kEvwpPU6j25sqQyVafP0IxiJeFw985CZH6H5bb6QBi0JFvdQ7l0M3gt25GO6Ve7vHPC7_-q3eK2V4hk8R4tXIPnwcsOOsE9t3atKtBbVNmw3UW39xeV-H_mw8XR4tK7j0V9iqrX-Q83Vp1T6J5kQuXXxbRAzvkKas0byKVgia-ACXC1J1u5g";
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
