import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export const Header = () => {
    return (
        <div>
            <Menu inverted size="huge">
                <Menu.Item
                    name='Профиль'
                    onClick={''}
                />
                <Menu.Item
                    name='Пользователи'
                    onClick={''}
                />
                <Menu.Item
                    name='Войти'
                    onClick={''}
                />
                <Menu.Item 
                    name='Выйти'
                    color='blue'
                    onClick={''}
                />
            </Menu>
        </div>
    )
}
