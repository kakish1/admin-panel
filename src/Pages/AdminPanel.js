import React, { useEffect, useState } from 'react'
import { Table, Label, Menu, Container, Button, Checkbox } from 'semantic-ui-react'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import axios from 'axios';
import { deleteUser } from '../api/api';
import { UserModal } from '../components/UserModal';

export const AdminPanel = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [users, setUsers] = useState([]);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await axios(
                'https://reqres.in/api/users',
            );
            setData(result.data.data);
            setLoading(false);
        };
        fetchData();

    }, []);

    const onDeleteUser = (id) => {
        deleteUser(id);
        console.log(id)
    }

    const showModal = () => {
        
        setIsModal(true);
    }

    const closeModal = () => setIsModal(false);

    return (
        <div>
            <UserModal isModal={isModal} closeModal={closeModal} />
            <Container>
                <Table celled >
                    <Table.Header>
                        <Table.Row textAlign="center">
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Firstname</Table.HeaderCell>
                            <Table.HeaderCell>Lastname</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {!loading ?
                            data.map(items => (
                                <Table.Row>
                                    <Table.Cell textAlign="center">{items.id}</Table.Cell>
                                    <Table.Cell>{items.first_name}</Table.Cell>
                                    <Table.Cell>{items.last_name}</Table.Cell>
                                    <Table.Cell>{items.email}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button
                                            icon
                                            negative
                                            size='small'
                                            onClick={() => onDeleteUser(items.id)}> Delete
                                </Button>

                                    </Table.Cell>
                                </Table.Row>
                            )) : ''
                        }
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell colSpan='6'>
                                <Button
                                    floated='right'
                                    icon
                                    labelPosition='left'
                                    primary
                                    size='small'
                                    onClick={() => showModal(true)}
                                >
                                    <Icon name='user' /> Add User
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Container>
        </div>
    )
}
