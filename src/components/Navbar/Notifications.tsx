import { Badge, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Notifications: React.FunctionComponent = () => {
    return (
        <IconButton>
            <Badge badgeContent={12} color="error" overlap='rectangular'>
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};

export default Notifications;