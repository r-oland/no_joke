import { defineType } from 'sanity';

export default defineType({
  title: 'Default image',
  name: 'defaultImage',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
});
