import { useEffect } from "react";
import { useState } from "react";
import { getAvatar } from "../../../../api/api";
import Loader from "../../../../api/loader";
import React from "react";

function AvatarCharacters(props) {
  const [avatar, setAvatar] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAvatar(props.id);
        setAvatar(response.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  });

  return (
    <div className="user-img">
      {isLoading && <Loader />}
      {isError && "Error"}
      {!isLoading && !isError && avatar !== "" && (
        <img
          className="image"
          src={`${avatar}`}
          crossOrigin="anonymous"
          alt="Avatar"
        ></img>
      )}
    </div>
  );
}

export default AvatarCharacters;
