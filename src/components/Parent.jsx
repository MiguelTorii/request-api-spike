import { useEffect, useState } from "react";

const Parent = () => {
  const [showFrame, setshowFrame] = useState();
  const [stateToken, setStateToken] = useState(false);

  useEffect(() => {
    localStorage.clear();
    // Set interval "searchs for the token"

    const searchInterval = setInterval(() => {
      const token = localStorage.getItem("VALID_TOKEN");
      if (token) {
        setStateToken(token);
      }
    }, 1000);
    if (stateToken) {
      return () => clearInterval(searchInterval);
    }
  }, [stateToken]);

  return (
    <div className="app">
      parent
      <button onClick={() => setshowFrame(!showFrame)}>show iframe</button>
      <div className="frameContainer">
        {showFrame && (
          <iframe
            width="300px"
            height="500px"
            src="http://localhost:3000/frame"
            frameBorder="0"
            title="test"
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin"
          />
        )}
      </div>
      {stateToken ? <h3>Token found! {stateToken}</h3> : <h3>No token</h3>}
    </div>
  );
};

export default Parent;
