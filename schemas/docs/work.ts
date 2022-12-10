import { defineField, defineType } from 'sanity';
import { DesktopIcon as icon } from '@sanity/icons';

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'defaultImage',
      validation: (rule) => rule.required(),
    }),
  ],
});
