import React, { useState } from "react";
import { useQuery } from "react-query";
import * as api from "./usersApi";
import UserForm from "./UserForm";

const UsersDetails = ({ userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(["user", userId], () => api.getUser(userId), {
    enabled: Boolean(userId),
  });

  if (!userId) {
    return "Select a user.";
  }

  if (isLoading) {
    return "Loading user details";
  }

  if (isError) {
    return "Loading errorrrr :(";
  }
  return (
    <div>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "CANCEL" : "EDIT"}
      </button>
      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing} />
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>{user.details}</p>
        </div>
      )}
    </div>
  );
};

export default UsersDetails;
