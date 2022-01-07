import React, { useEffect, useState } from "react";
import UserCard from "../userCard";
import "./users.scss";

import { getUsers } from "../../../api/api";

import Loader from "../../../api/loader";

function Users(props) {
  const [users, setUsers] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(props.letter);
    async function fetchData() {
      try {
        const response = await getUsers(`${props.letter}`);
        setUsers(response.data.docs);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [props.letter]);

  return (
    <>
      <div className="users-block">
        {isLoading && <Loader />}
        {isError && "Error"}
        {!isLoading &&
          !isError &&
          users.map((user, index) => (
            <UserCard key={user._id} user={user} index={index} />
          ))}
      </div>
    </>
  );
}

export default Users;
