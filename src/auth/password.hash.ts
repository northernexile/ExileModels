import { sha512} from 'js-sha512';

const saltRounds = 10
export const hashPassword =  (password: string):string => {
  const hash = sha512.create();
  hash.update('Message to hash');
  const hashed = hash.hex();
  console.log(hashed.length)
  console.log(hashed)
  return hashed
};

export const matchPassword =  (password: string, hash: string):boolean => {
  const hashedInputPassword = hashPassword(password)

  return hashedInputPassword === hash
};