import React from "react";
import { DistributorList, constantapidata } from "../Constants/DashboardConstant";
import axios from "axios";

export const DashboardApiAction = () => async (dispatch) => {
  await dispatch({
    type: constantapidata.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    await dispatch({
      type: constantapidata.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch {
    await dispatch({
      type: constantapidata.ERROR,
      payload: { loading: true, data: {} },
    });
  }
};

export const DistributorListAction = (payload) => async (dispatch) => {
  await dispatch({
    type: DistributorList.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.post(
        "https://dev-vinifera-function.azurewebsites.net/api/getUsers",
      payload,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTE2MjUzMDYsIm5vbmNlIjoiMDE4ZTgzZTQtYjUyYi03YjMwLWJlODgtMGQ0MjA5MGJiY2M4IiwiaWF0IjoxNzExNjIxNzA2LCJhdXRoX3RpbWUiOjE3MTE2MTc2NjUsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMTYyMTcwNn0.QhPsLG7HXGDH4CEeNotCbFcG2xrwu0uH9ieQUDkn8MfbnGUy8tg9uGV6T0h9mdbUfOew-wRLuhOAdHEeV1IT_DC7pEZqADnOy686L4K9NBcAgZQ7D7WkNyYve8qdoPfmgZp9j3wPqO_YRtAsrdma5i-t-AL1WnS0fs4wAqSPaJo4GwoRyiH5ZIEKWwUhM2jozlZujdofVZ3ofVg_ZorsyDhqLLEWWJYmGK4pIotNbMnTshrM5ofPwcWwk5-goINJESoEXU8lWN8A6LD86oot9xQoI43haXWJFzd4U8rzX1Z43OamHQk3frH84jtQ54cNOAgstyCY9UJLkBv-F-1diQ`,
        },
      }
    );
    await dispatch({
      type: DistributorList.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch {
    await dispatch({
      type: DistributorList.ERROR,
      payload: { loading: true, data: {} },
    });
  }
};
