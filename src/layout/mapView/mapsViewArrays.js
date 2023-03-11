import AddImageIcon from '../../../assets/icons/svg/AddImageIcon';
import BookCheckIcon from '../../../assets/icons/svg/BookCheckIcon';
import CommentIcon from '../../../assets/icons/svg/CommentIcon';
import FavoriteIcon from '../../../assets/icons/svg/FavoriteIcon';
import OutIcon from '../../../assets/icons/svg/OutIcon';
import TrashIcon from '../../../assets/icons/svg/TrashIcon';
import UsersIcon from '../../../assets/icons/svg/UsersIcon';
import { baseTheme } from '../../../styles/theme';

export const panelIconsArray = [
    {
        icon: <AddImageIcon size="30px" color={baseTheme.colors.primary} />,
    },
    {
        icon: <FavoriteIcon size="30px" color={baseTheme.colors.primary} />,
    },
    {
        icon: <OutIcon size="30px" color={baseTheme.colors.primary} />,
    },
    {
        icon: <TrashIcon size="30px" color={baseTheme.colors.primary} />,
    },
];

export const mapViewInfoArray = [
    {
        icon: <UsersIcon />,
        count: 12,
        title: 'Посещений',
    },
    {
        icon: <BookCheckIcon />,
        count: 3,
        title: 'Выполнений',
    },
    {
        icon: <CommentIcon />,
        count: 5,
        title: 'Комментариев',
    },
];
