import { AccountModel } from '../models/Account'

export interface IAddAccountModel{
  name: string
  email: string
  password: string
}

export interface IAddAccount{
  add(account: IAddAccountModel): AccountModel

}
