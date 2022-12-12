import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PersonCard from "./PersonCard";
import { getPerson } from "../../store/people";
import { getIdFromURL } from "../../utils";
import "./Person.css";

function Person() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const person = useSelector((state) => state.people.currentPerson);

  useEffect(() => {
    dispatch(getPerson(id));
  }, [dispatch, id]);

  function renderPerson() {
    const personId = getIdFromURL(person.url);

    return personId === id;
  }

  return (
    <div className="person-container">
      <h2
        className="text-link"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </h2>
      {renderPerson() ? <PersonCard person={person} /> : <div>Loading...</div>}
    </div>
  );
}

export default Person;
