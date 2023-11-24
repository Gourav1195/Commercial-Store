import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 40%;
  /* margin-left: 20px; */
  justified-content: center;
  margin: 5% auto 0 auto;
  /* To handle child component using parent component */
  & > div {
    margin: 15px;
  }
`;

const defaultValue = {
  name: "",
  email: "",
  phone: "",
};

// const handleChange = (e) => {
//   const [user, setUser] = useState(defaultValue);

//   setUser({ ...user, [e.target.name]: e.target.value });
//   console.log(e.target.name, e.target.value);
// };

export default function AddUser() {
  
const [user, setUser] = useState(defaultValue);
 const handleChange = (e) => {

  setUser({ ...user, [e.target.name]: e.target.value });
  console.log(e.target.name, e.target.value);
 }
 
  const AddUserData = async() => {
    console.log('AddUserData called');
    await addUser(user);
  }

  return (
    <>
      <Container>
        <Typography variant="h3" component="h3">
          Add User
        </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input value= {user.name} onChange={(e) => handleChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => handleChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone no</InputLabel>
          <Input onChange={(e) => handleChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={()=> AddUserData()} >Add User</Button>
        </FormControl>
      </Container>
    </>
  );
}
