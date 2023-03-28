import React, { ChangeEvent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
    },
    input: {
      display: 'none',
    },
  })
);



interface ICustomFileInputProps {
  setImageSrc: Function,
  setImageShow: Function,
  setImageFile: Function
}

export default function CustomFileInput(props: ICustomFileInputProps) {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {setImageSrc, setImageShow, setImageFile} = props;

  const handleImageFormData = (file: File) => {
    setImageFile(file)
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = function(e: ProgressEvent<FileReader>) {
      if (e.target != null && typeof(e.target.result) === 'string') {
        setImageShow(e.target.result)
      }
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const imagePath = event.target.value
      const newImagePath = imagePath.replace("C:\\fakepath\\", "uploads/");
      setImageSrc(newImagePath);


      if (event.target.files != null) {
        // setImageFile(event.target.files[0])
        handleImageFormData(event.target.files[0])
      }

  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="file-input">Upload file</InputLabel>
      <Input
        id="file-input"
        type="file"
        onChange={handleImageUpload}
        className={classes.input}
      />
      <label htmlFor="file-input">
        <Button component="span">
          {selectedFile ? selectedFile.name : 'Choose file'}
        </Button>
      </label>
    </FormControl>
  );
}
