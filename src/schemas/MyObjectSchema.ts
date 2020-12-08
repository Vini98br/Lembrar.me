export default class MyObjectSchema {
  static schema = {
    name: 'MyObject',
    primarykey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      room: 'string',
      furniture: 'string?',
      drawer: 'string?',
      obs: 'string?',
    },
  };
}
