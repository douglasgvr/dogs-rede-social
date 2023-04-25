import React from "react";

function PhotoGet() {
  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/photo")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        // placeholder="?_total=1&_page=1&_user=6"
        // value={query}
        // onChange={({ target }) => setQuery(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}

export default PhotoGet;
