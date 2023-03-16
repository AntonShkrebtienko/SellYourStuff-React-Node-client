import * as React from 'react'
import {
    Button, Container, FormControl, FormGroup,
    FormHelperText, Input, InputLabel
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {FormEvent} from "react";


export default function Login () {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
       return  console.log('Submit')
    }

    return (
        <Container maxWidth={'sm'}>
            <Typography variant={'h1'} className={'title'}>Login</Typography>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Username or email adress</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text"/>
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
                    </FormControl>
                    <Button type={'submit'}>Submit</Button>
                </FormGroup>
            </form>

        </Container>
    )
}