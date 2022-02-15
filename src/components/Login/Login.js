import { Box, Button, TextField } from '@mui/material'

import './Login.css'

function Login() {
    return (
        <Box
            className='login-form'
            component="form"
            noValidate
            autoComplete="off"
    >
        <div className='login-form-group'>
            <div className='login-input'>
                <TextField 
                className='login-text-field'              
                label='Имя пользователя'
                placeholder='Иванов Иван Иванович'
                variant="outlined"
                />
            </div>
            <div className='login-input'>
                <TextField
                className='login-text-field'
                label="Пароль"
                type="password"
                autoComplete="current-password"
                />
            </div>
            <div className='login-input-button'>
                <Button variant="contained">Отправить</Button>
            </div>
        </div>
    </Box>
    )
}

export default Login