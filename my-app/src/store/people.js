const SET_PERSON = "SET_PERSON";

//==========actions============
// set Person in store

export const setPerson = (person) => {
  return {
    type: SET_PERSON,
    payload: person,
  };
};

//========= thunk action creators=========

export const getPerson = () => async (dispatch) => {
  const personNumber = Math.floor(Math.random() * (50 - 1 + 1) + 1);

  const response = await fetch(`https://swapi.dev/api/people/${personNumber}/`);
  if (response.ok) {
    const message = await response.json();
    dispatch(setPerson(message));
  } else return response.json();
};

//============ reducer================
const initialState = {
  person: null,
  loaded: false,
};

const peopleReducer = (peopleState = initialState, action) => {
  switch (action.type) {
    case SET_PERSON:
      const person = action.payload;
      return { ...person, loaded: true };
    default:
      return peopleState;
  }
};

export default peopleReducer;
