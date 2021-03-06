import {uuid} from 'uuidv4'
import IUsersTokensRepository from '@modules/users/repositories/IUserTokensRepository';


import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokensRepository implements IUsersTokensRepository {
  private UserTokens: UserToken[] = [];

public async generate(user_id: string): Promise<UserToken> {
  const userToken = new UserToken();

  Object.assign(userToken, {
    id: uuid(),
    token: uuid(),
    user_id,
  });

  this.UserTokens.push(userToken);

  return userToken;
}
 public async findByToken(token: string): Promise<UserToken | undefined> {
   const userToken = this.UserTokens.find(findToken => findToken.token === token);

   return userToken;
 }


}

export default FakeUserTokensRepository;
