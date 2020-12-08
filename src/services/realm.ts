import Realm from 'realm';
import MyObjectSchema from '../schemas/MyObjectSchema';

export default function getRealm() {
  return Realm.open({
    schema: [MyObjectSchema],
  });
}
