import { defineField, defineType } from "sanity";
import { UserIcon as icon } from "@sanity/icons";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
      hidden: true,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "defaultImage",
      validation: (rule) => rule.required(),
    }),
  ],
});
