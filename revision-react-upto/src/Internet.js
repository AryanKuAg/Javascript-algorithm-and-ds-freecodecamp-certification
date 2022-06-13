import React, { useEffect } from "react";

function Internet() {
  useEffect(() => {
    (async () => {
      try {
        let rawData = await fetch("https://swapi.dev/api/people/2/", {
            method: 'GET',
            // body: JSON.stringify({aryan: 'name'}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(rawData.headers)
        let obj = await rawData.json();
        console.log(obj);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return <div>Internet</div>;
}

export default React.memo(Internet);
