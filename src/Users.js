import React from "react";
import { useQuery } from "react-query";
import * as api from "./usersApi";

const Users = ({setUserId}) => {
  const { data, isLoading, isError} = useQuery("users", api.getUsers);
  //{retry: false} اینو اگه بعد از getusers بیاریم پیام خطارو نمایش میده
  if (isLoading) {
    return "Loading Users...";
  }

  if (isError) {
    return "Something went wrong !!";
  }
  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}<button onClick={()=>setUserId(user.id)}>View</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
