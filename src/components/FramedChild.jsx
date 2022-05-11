import { useEffect } from "react";

const FramedChild = () => {
  useEffect(() => {
    document.requestStorageAccess().then(
      () => {
        console.log("access granted");
      },
      () => {
        console.log("access denied");
        // document.requestStorageAccess() may only be requested from inside a short running user-generated event handler.
        // that's why it fails
      }
    );
  }, []);

  const askPermission = () => {
    document.requestStorageAccess().then(
      () => {
        console.log("access granted");
        localStorage.setItem("VALID_TOKEN", "Hello world");
      },
      () => {
        console.log("access denied");
      }
    );
  };

  return (
    <div>
      Framed child
      <button onClick={askPermission}>can i have access to storage?</button>
    </div>
  );
};

export default FramedChild;
