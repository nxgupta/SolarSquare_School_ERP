import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Section({ classData, handleChange }) {

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Section</InputLabel>
            <Select
                name='section'
                labelId="demo-select-small"
                id="demo-select-small"
                value={classData.section}
                label="Section"
                onChange={handleChange}
            >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
            </Select>
        </FormControl>
    );
}