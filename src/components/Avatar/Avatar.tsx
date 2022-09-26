import GroupIcon from '@mui/icons-material/Group';

import './Avatar.scss'

const Avatar = ({user}:any) => {
    return (
        <div className='avatar'>
            <div className='profile'>
                <img src={user.avatar_url}/>
            </div>
            <div className='title'>
                {user.name}
            </div>
            <div className='username'>
                <a target="_blank" href={`https://github.com/${user.login}`}>{user.login}</a>
            </div>
            <div className='subtitle'>{user.bio}</div>
            <div className='follow'>
                <div className='followers'>
                    <GroupIcon/>
                    <span>{user.followers} followers</span>
                </div>
                <div className='following'>
                    <GroupIcon/>
                    <span>{user.following} following</span>
                </div>
            </div>
        </div>
    );
};

export default Avatar;