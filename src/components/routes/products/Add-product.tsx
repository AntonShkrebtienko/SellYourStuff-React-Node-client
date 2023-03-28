import React, { useState } from "react";
import {
  Card, CardMedia, CardContent,
  Typography, TextField,
  Button, Container, Input } from "@mui/material";
import CustomFileInput from "components/custom-file-input/CustomFileInput"
import axios from "axios";

//todo describe component state types
const AddProductCard = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageShow, setImageShow] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Create a new FormData object
    const formData = new FormData();

    // Append the image file to the FormData object
    if (imageFile) {
      formData.append('image', imageFile);
    }

    // Make the Axios post request
    axios.post('/users/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      // Handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });

  };

  return (
      <Container maxWidth="md">
        <Typography variant="h1" className="title">Add Product</Typography>
        <Card >
          <CardContent>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <CustomFileInput setImageSrc={setImageSrc}
              setImageShow={setImageShow}
              setImageFile={setImageFile}/>
              <Button type={'submit'} />
            </form>
          </CardContent>
          {
            imageShow ? (
              <CardMedia
                component="img"
                height="300"
                image={imageShow}
                alt={title}
              />
            ) : null
          }
          <CardContent>
            <form action="/users/add-product" method="POST">
              <TextField
                required
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                required
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                required
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Add Card
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
  );
};

export default AddProductCard;
