import axios from "axios";
import { userlistdata } from "../Constants/UserListApiConstant";

export const UsersListApiAction = (payload) => async (dispatch) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTMwMDcxMTAsIm5vbmNlIjoiMDE4ZWQyMTktMmRhYy03MzMzLTg5Y2UtM2FlNDNlZWQxMzkxIiwiaWF0IjoxNzEzMDAzNTEwLCJhdXRoX3RpbWUiOjE3MTI5MjAxMjIsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMzAwMzUxMH0.rOcCLUr8c3HO-B_pWuxJ1hlDAcowOUWFeRJBNRfGGlR8NEbKZ_aaTJCaVf2-U1Ayss3f1qK4wpwVJerkwOtaffLYD5GvSDNp44GcypnLwNAqxRuApfh39X6D3LXHf2b5dsh2AP6QfKayzir8DujoRhJhP58kZPF-PRvhbkGXDQc__oSB17jK-F6qsfswzHAAFcJm7Q7As4JhhDH6s--Qn2OcOkCyZSnEBlfG6OPV1uogFzsAe5vkm7eMumu9g5RHWYm1kNv9R_3vZdJ5TBwza5tlz3YIpwHvB1hr-XlJof2I8t1U-5OzwHb8xsVfnb_8GbaxHa1x0X39zqtS-5Pwgg";
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
