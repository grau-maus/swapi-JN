import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

//========= thunks =========
export const getPeople = createAsyncThunk("GET_PEOPLE", async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
});

export const getMorePeople = createAsyncThunk(
  "GET_MORE_PEOPLE",
  async (nextUrl) => {
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();

      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

export const getPerson = createAsyncThunk("GET_PERSON", async (personId) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${personId}/`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
});

//============ initial people state ================
const initialState = {
  data: [],
  currentPerson: {},
  nextList: "",
};

//============ reducer ================
const peopleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getPeople.fulfilled, (state, action) => {
      const data = action.payload.results;
      const nextList = action.payload.next;

      state = { ...state, data, nextList };

      return state;
    })
    .addCase(getMorePeople.fulfilled, (state, action) => {
      const data = [...state.data];
      const nextList = action.payload.next;

      data.push(...action.payload.results);
      state = { ...state, data, nextList };

      return state;
    })
    .addCase(getPerson.fulfilled, (state, action) => {
      const currentPerson = action.payload;

      state = { ...state, currentPerson };

      return state;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

export default peopleReducer;
