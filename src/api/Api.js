import React from "react";
import UserPost from "./endpoints/UserPost";
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";
import PhotoGet from "./endpoints/PhotoGet";

function Api() {
  return (
    <div>
      <h1>UserPost</h1>
      <UserPost />
      <h1>TokenPost</h1>
      <TokenPost />
      <h1>Photo Post</h1>
      <PhotoPost />
      <h1>Photo Get</h1>
      <PhotoGet />
    </div>
  );
}

export default Api;
