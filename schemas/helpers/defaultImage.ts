import { defineArrayMember, defineType } from "sanity";

export default defineType({
  title: "Default image",
  name: "defaultImage",
  type: "image",
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
});
