import React, { useState } from 'react'
import { Modal, Dimmer, Segment, Form, Dropdown, TextArea, Button } from 'semantic-ui-react'

export const UserModal = (props) => {


    return (
        <div>
            <Modal size="small" open={props.isModal} onClose={props.closeModal} >
                <Modal.Header>New user :</Modal.Header>
                <Modal.Content>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>Firstname</label>
                                <Form.Input fluid name={'firstname'}  placeholder='Firstname' />
                            </Form.Field>

                            <Form.Field>
                                <label>Lastname</label>
                                <Form.Input fluid name={'lastname'}  placeholder='Lastname' />
                            </Form.Field>

                            <Form.Field>
                                <label>Email</label>
                                <Form.Input fluid  name={'email'}  placeholder='Email' />
                            </Form.Field>

                        </Form>
                    </Segment>

                </Modal.Content>
                <Modal.Actions>
                <Button
                    color='blue'
                    
                    icon="checkmark"
                    content="Сохранить"
                    onClick={''}
                />
                <Button
                    negative
                    onClick={props.closeModal}
                    content="Отменить"
                />
                </Modal.Actions>
            </Modal>
        </div>
    )
}
