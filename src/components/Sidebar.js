import React, { useState } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Auth } from '../Pages/Auth';
import { AdminPanel } from '../Pages/AdminPanel';
import { Settings } from '../Pages/Settings';
import { Route, NavLink, Switch } from 'react-router-dom';

export const SideBar = () => {

    const [auth, setAuth] = useState(false);

    return (
        <div>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <Menu.Item as={NavLink} exact to='/' >
                    <Icon name='home' />
                            Home
                    </Menu.Item>

                <Menu.Item as={NavLink} exact to='/panel' >
                    <Icon name='user' />
                            Panel
                     </Menu.Item>
                <Menu.Item as={NavLink} exact to='/settings' >
                    <Icon name='settings' />
                            Settings
                        </Menu.Item>
                <Menu.Item as={NavLink} exact to='/settings' >
                    <Icon name='serca' />
                            Settings
                        </Menu.Item>


            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic>
                    <Switch>
                        <Route exact path='/' render={() => <Auth auth={auth} setAuth={setAuth} />} />
                        <Route exact path='/panel' render={() => <AdminPanel /> } />
                        <Route exact path='/settings' component={Settings} />
                    </Switch>
                </Segment>
            </Sidebar.Pusher>
        </div>
    )
}
