import { getUserInfo } from './getUserInfo';
import { getCurrentUser } from '../auth';

export const getCurrentUserInfo = async () => {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;
    return await getUserInfo(currentUser.id);
}