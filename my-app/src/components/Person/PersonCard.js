import React from "react";

function PersonCard({ person }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Height:</th>
          <th>Films:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{person.name}</td>
          <td>{person.height}</td>
          <td>
            {person.films.map((film) => {
              return (
                <div
                  className="text-link"
                  key={film}
                  onClick={() => {
                    window.open(film);
                  }}
                >
                  {film}
                </div>
              );
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PersonCard;
