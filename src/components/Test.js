import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';

export const Test = () => {
    const [state, setState] = useState({
        name: '',
        value: ''
    });

    const [name, setName] = useState('');


    return (
        <>

            <Form.Field>
                <label>name</label>
                <Form.Input fluid name={'id'} placeholder='ID' value={name} onChange={(event) => setState(event.target.value)} />
            </Form.Field>

            <Form.Field>
                <label>name</label>
                <Form.Input fluid name={'id'} placeholder='ID' value={state.name} />
            </Form.Field>
        </>
    )
}
