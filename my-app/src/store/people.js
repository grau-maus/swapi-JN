const SET_PERSON = "SET_PERSON";

//==========actions============
// set Person in store

export const setPerson = (listPerson) => {
  return {
    type: SET_PERSON,
    payload: listPerson,
  };
};

//========= thunk action creators=========

export const getPerson = () => async (dispatch) => {
  const personNumber = Math.random(50);
  const response = await fetch(
    `http https://swapi.dev/api/people/${personNumber}`
  );
  if (response.ok) {
    const { message } = await response.json();
    const person = Object.keys(message);

    dispatch(setPerson(person));
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
