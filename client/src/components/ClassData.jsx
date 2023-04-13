import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ClassData({classData,handleChange}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Classes</InputLabel>
      <Select
        name='studentClass'
        labelId="demo-select-small"
        id="demo-select-small"
        value={classData.studentClass}
        label="Classes"
        onChange={handleChange}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
      </Select>
    </FormControl>
  );
}