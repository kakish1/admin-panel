import React, { useState } from 'react'
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react'

export const Auth = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    //const [loading, setLoading] = useState(true);
    const [err] = useState(false);


    return (
        <div>
            <Grid textAlign='center' style={{ height: '100%', marginRight: '150px' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center'> Авторизационная форма </Header>
                    {err ? <Header as='h5' color='red' textAlign='center'> Не правилный логин или пароль </Header> : ''}
                    <Form size='large'>
                        <Segment >
                            <Form.Input fluid icon='user' onChange={e => setLogin(e.target.value)} value={login} name={'login'} iconPosition='left' placeholder='Имя пользователя' />
                            <Form.Input
                                fluid       
                                icon='lock'
                                name={'password'}
                                iconPosition='left'
                                placeholder='Пароль'
                                type='password'
                                onChange={e => setPassword(e.target.value)} 
                                value={password}
                            />
                            <Button onClick={() => props.setAuth(true)}>  Вход   </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
