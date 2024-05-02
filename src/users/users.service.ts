import { Injectable } from '@nestjs/common';


const User = [
  {
    id: 1,
    name: 'bruno',
    email: 'bruno@ruiz.com'
  },
  {
    id: 2,
    name: 'maximiliano',
    email: 'maximiliano@ruiz.com'
  },
  {
    id: 3,
    name: 'rosa',
    email: 'rosa@ruiz.com'
  },
  {
    id: 4,
    name: 'matilda',
    email: 'matilda@ruiz.com'
  },
  {
    id: 5,
    name: 'mateo',
    email: 'mateo@ruiz.com'
  }

]

@Injectable()
export class UsersService {

  findAll() {
    return User;
  }



}
