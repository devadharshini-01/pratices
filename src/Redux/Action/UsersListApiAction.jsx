import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTIyOTYyNDksIm5vbmNlIjoiMDE4ZWE3ZGMtZDk2MS03ZWZlLTgyMDktNzFhYmRjZjYxMDg2IiwiaWF0IjoxNzEyMjkyNjQ5LCJhdXRoX3RpbWUiOjE3MTIyMTE1MTgsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMjI5MjY0OX0.i178nYTGIg_v26IBOtPFmU7zFKGeiwNkOxvbC9Q8Y7UyCfqbUbbnDxCXd2NE4jbJWGUwBTwBD_xxa5WB9-YV2Ddz2mkrmp27TEyPIJZ3HCEdHKrNWE9p-pK1vcyjJJOVMXuA6Mp9X333gMz_Q4sA8dIX-N6M8s1zYP8t8iKaCj5oreUqZjhDXW6RLIyfA9Iw6nXWmzn7eGv3X5NxhhI3U6-7CEJsW62dfeD0nlF0eObpItbwITB5CGryTleCmSpapqNAlt2a2A6xhAOIxTcNoEdNr0VozSqPjY72uD06vvHq3R8la_IiGfwGudAfGIb5BD-YJ1zDu8CL7MN6wvKWXQ";
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
