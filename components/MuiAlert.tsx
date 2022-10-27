import {Stack, Alert} from "@mui/material"

export const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='success'>This is a success alert</Alert>
        </Stack>
    )
}