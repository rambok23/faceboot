import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
//import Select from "react-select";

const FormInput = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                //as={TextField}
                defaultValue=""
                control={control}
                //fullWidth
                name={name}
                //label={label}
               // required={required}
                render = {({ field})=> (
                    <TextField
                        fullWidth
                        label={label}
                        required
                    />
                )}
            />
        </Grid>
    );
}
export default FormInput;