import { defineField, defineType } from "sanity";
import { HeartFilledIcon as icon } from "@sanity/icons";

export default defineType({
  name: "illustration",
  title: "Illustration",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "illustration",
      title: "Illustration",
      type: "defaultImage",
      validation: (rule) => rule.required(),
    }),
  ],
});
