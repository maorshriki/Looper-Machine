import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"></TextField>
        <TextField source="clickStop"></TextField>
        <TextField source="clickPlay"></TextField>
        <TextField source="clickRec"></TextField>
      </Datagrid>
    </List>
  );
};

export default PostList;
