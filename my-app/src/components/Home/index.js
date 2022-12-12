import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadMore from "../LoadMore";
import { getPeople, getMorePeople } from "../../store/people";
import { getIdFromURL } from "../../utils";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const people = useSelector((state) => state.people.data);
  const loadMoreURL = useSelector((state) => state.people.nextList);

  useEffect(() => {
    if (!people.length) {
      dispatch(getPeople());
    }
  }, [dispatch, people.length]);

  function loadPerson(person) {
    const personId = getIdFromURL(person.url);

    navigate(`/person/${personId}`);
  }

  return (
    <>
      <h1>SWAPI Project Example</h1>
      <div>
        <h2>People:</h2>
        {people.length ? (
          people.map((person) => {
            return (
              <div
                className="text-link"
                key={person.name}
                onClick={() => {
                  loadPerson(person);
                }}
              >
                {person.name}
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
        {loadMoreURL ? (
          <LoadMore
            dispatchCallback={() => dispatch(getMorePeople(loadMoreURL))}
          />
        ) : null}
      </div>
    </>
  );
}

export default Home;
