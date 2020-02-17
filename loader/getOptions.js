import { getOptions } from 'loader-utils';
import { validateOptions } from 'schema-utils';

const schema = {
  type: object,
  properties: {
    test: {
      type: string
    }
  }
}

export default function (source) {
  const options = getOptions(this);

  validateOptions(schema, options, 'Example Loader');

  // 在这里写转换 source 的逻辑 ...
  return `export default ${JSON.stringify(source)}`;
};
