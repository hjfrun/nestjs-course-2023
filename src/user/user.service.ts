import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  get() {
    return 'fetch users from user service'
  }
}
