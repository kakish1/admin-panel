import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Table, Container, Button, Loader } from 'semantic-ui-react'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import axios from 'axios';
import { UserModal } from '../components/UserModal';
import { StateContext } from '../api/state';

export const AdminPanel = (props) => {

    const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [actionType, setActionType] = useState('');
    const [user, setUser] = useState([]);
    const [] = useState([]);




    const state = useContext(StateContext);

    useEffect(() => {
        setLoading(false);
    }, [])

    const handleData = (item, type) => {
        setUser(item);
        setActionType(type);
        setIsModal(true);

    }



    // useEffect(() => {
    //     const fetchData = async (tabNum) => {
    //         setLoading(true);
    //         const result = await axios( 
    //             `https://testapadters.homebank.kz/avaya-integration/api/Avaya/records/${tabNum}`,
    //         );
    //         setData(result.data);
    //         setLoading(false);
    //     };
    //     fetchData();

    // }, [tabnum]);


    const closeModal = () => {
        setIsModal(false);
        console.log('modal closed')
    }

    const openModal = (_, type) => {
        setActionType(type);
        if(type === 'add'){
            setUser({ id: '', tabNum: '', first_name: '', last_name: '', email: '' });
        }
        setIsModal(true);
    }
    // debugger

    return (
        <div>
            <Container>
                <Table celled >
                    <Table.Header>
                        <Table.Row textAlign="center">
                            <Table.HeaderCell>Табельный номер</Table.HeaderCell>
                            <Table.HeaderCell>Firstname</Table.HeaderCell>
                            <Table.HeaderCell>Lastname</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {!loading ?
                            state.data.map(items => (
                                <Table.Row key={items.id}>
                                    <Table.Cell textAlign="center">{items.tabNum}</Table.Cell>
                                    <Table.Cell>{items.first_name}</Table.Cell>
                                    <Table.Cell>{items.last_name}</Table.Cell>
                                    <Table.Cell>{items.email}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button
                                            icon='edit'
                                            primary
                                            size='small'
                                            onClick={() => handleData(items, 'edit')}>
                                        </Button>
                                        <Button
                                            icon="delete"
                                            negative
                                            size='small'
                                            onClick={() => { state.deleteUser(items.id) }}>
                                        </Button>


                                    </Table.Cell>
                                </Table.Row>
                            )) :
                            <Table.Cell> <Loader active /></Table.Cell>


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
                                    onClick={() => openModal(true, 'add')}
                                >
                                    <Icon name='user' /> Add User
                                </Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
                {
                    actionType === 'add' ? <UserModal open={isModal} closeModal={closeModal} actionType={actionType} user={user}  /> : ''
                }

                {
                    actionType === 'edit' ? <UserModal open={isModal} closeModal={closeModal} actionType={actionType} user={user} /> : ''
                }
            </Container>
        </div>
    )
}
