import React, { FC } from 'react';
import { IUser } from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = () => {
    
    return (
        <div>
            {UserList.map(user => 
                <UserItem key={user.id} user={user} />
            )}
        </div>
    );
};

export default UserList;