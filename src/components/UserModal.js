import React, { useContext, useEffect, useState } from 'react'
import { Modal, Segment, Form, Button } from 'semantic-ui-react'
import { StateContext } from '../api/state';

export const UserModal = (props) => {
    const state = useContext(StateContext);



    const [data, setData] = useState({ id: null, tabNum: null, first_name: null, last_name: null, email: null });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    }

    const onAddUser = () => {
        state.addUser(data.id, data.tabNum, data.first_name, data.last_name, data.email);
    }


    const onClose = () => {
        props.closeModal()
    }

    useEffect(() => {
        if (props.actionType === 'edit') {
            setData(props.user);
        }
        else if (props.actionType === 'add') {
            setData({ id: null, tabNum: null, first_name: null, last_name: null, email: null });
        }
    }, [])



    debugger
    return (
        <div>
            <Modal size="small" open={props.open} onClose={props.closeModal} >
                <Modal.Header>New user :</Modal.Header>
                <Modal.Content>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>ID</label>
                                <Form.Input fluid name='id' placeholder='ID' value={props.actionType === 'edit' ? props.user.id : data.id} onChange={handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Tab Number</label>
                                <Form.Input fluid name='tabNum' placeholder='Tab Number' value={props.actionType === 'edit' ? props.user.tabNum : data.tabNum} onChange={handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <label>Firstname</label>
                                <Form.Input fluid name='first_name' placeholder='Firstname' value={props.actionType === 'edit' ? props.user.first_name : data.first_name} onChange={handleChange} />
                            </Form.Field>

                            <Form.Field>
                                <label>Lastname</label>
                                <Form.Input fluid name='last_name' placeholder='Lastname' value={props.actionType === 'edit' ? props.user.last_name : data.last_name} onChange={handleChange} />
                            </Form.Field>

                            <Form.Field>
                                <label>Email</label>
                                <Form.Input fluid name='email' placeholder='Email' value={props.actionType === 'edit' ? props.user.email : data.email} onChange={handleChange} />
                            </Form.Field>

                        </Form>
                    </Segment>

                </Modal.Content>
                <Modal.Actions>
                    {props.actionType === 'edit'
                        ?
                        <Button
                            color='blue'
                            icon="undo"
                            content="Update"
                            onClick={() => { "state.addUser(data.id, data.tabNum, data.first_name, data.last_name, data.email)" }}
                        />
                        :
                        <Button
                            color='blue'
                            icon="checkmark"
                            content="Add"
                            onClick={() => onAddUser()}
                        />

                    }
                    <Button
                        negative
                        onClick={() => onClose()}
                        content="Close"
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )
}
