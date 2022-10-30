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

export const getPerson = (personNumber) => async (dispatch) => {
  const response = await fetch(
    `http https://swapi.dev/api/people/${personNumber}`
  );
  if (response.ok) {
    const { message } = await response.json();
    const person = Object.keys(message);

    dispatch(setPerson(person));
  } else return response.json();
};
