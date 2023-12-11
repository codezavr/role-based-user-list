import { apiClient } from '../utils/clients';
import { UsersData } from '../ui/types/user';

class UserService {
    private readonly basePath = '/get-users';

    async getUsers(): Promise<UsersData> {
        const { data } = await apiClient.get(`${ this.basePath }`);
        return data;
    }
}

export const userService = new UserService();
