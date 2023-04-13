import { Box, TextField } from '@mui/material'
import React from 'react'

const Input = ({ name, value, handleChange, label }) => {
    return (
        <TextField
            name={name}
            value={value}
            onChange={handleChange}
            required
            fullWidth
            id={name}
            label={label}
            autoFocus
        />
    )
}

export default Input
