import { AsteriskIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "logos",
  title: "Logos",
  type: "document",
  icon: AsteriskIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
});
