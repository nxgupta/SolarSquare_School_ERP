import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { togglePaidFees } from "../../redux/reducers/studentSlice"
import { Button, Stack } from '@mui/material';
import { feePays, getParentChildren } from '../../redux/actions/studentAction';
export default function User() {
    const { students } = useSelector(state => state.students)
    const { user } = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getParentChildren(user?.email))
    }, [dispatch])




  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: "40px"}}>
        <Card sx={{maxWidth:275}}>
                <Typography>
                    Details of your child
                </Typography>
            <CardContent>
                <Stack direction="row" gap="20px" flexWrap="wrap" >
                    {
                        students?.map(student=>(
                            <Box key={student?._id} sx={{sm: {width: "350px"}, width: "100%"}}>
                                    <Stack direction="row" alignItems="center" gap="10px">
                                        <Typography variant="span">Name: </Typography>
                                        <Typography variant="span">{student?.name}</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" gap="10px">
                                        <Typography variant="span">Class: </Typography>
                                        <Typography variant="span">{student?.className}</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" gap="10px">
                                        <Typography variant="span">Section: </Typography>
                                        <Typography variant="span">{student?.section}</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" gap="10px">
                                        <Typography variant="span">Fees: </Typography>
                                        <Typography variant="span">{student?.fees}</Typography>
                                    </Stack>
                                    {
                                        student?.isFeesPaid  ? (
                                            <Typography sx={{
                                                background: "blue",
                                                color: "#fff",
                                                padding: "8px",
                                                margin: "10px 0",
                                                borderRadius: "10px"
                                            }}>Paid</Typography>
                                        ) : (
                                            <Typography sx={{
                                                background: "#999",
                                                color: "#fff",
                                                padding: "8px",
                                                margin: "10px 0",
                                                borderRadius: "10px"
                                            }}>Unpaid</Typography>
                                        )
                                    }
                                    <Button disabled={student?.isFeesPaid} onClick={() => {
                                        dispatch(feePays(student?._id))
                                        dispatch(togglePaidFees(student?._id))
                                        }} variant="contained">Pay Fee</Button>      
                            </Box>
                        ))
                    }
                </Stack>
            </CardContent>
        </Card>
    </Box>
  );
}
