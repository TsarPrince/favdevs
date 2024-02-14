import { DiamondIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  icon: DiamondIcon,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    },
    {
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "popular",
              title: "Popular",
              type: "boolean",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "button",
              title: "Button",
              type: "reference",
              to: [{ type: "button" }],
            },
          ],
        },
      ],
    },
  ],
});
