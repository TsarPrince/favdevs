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
              name: "priceId",
              title: "Price ID",
              description:
                "Create product in Stripe and enter it's price ID here, for eg: price_1Okm2KSE7yoY9qakAsOAtZrh",
              type: "string",
            },
            {
              name: "cycle",
              title: "Billing Cycle",
              type: "string",
              options: {
                list: [
                  { title: "Monthly", value: "monthly" },
                  { title: "Yearly", value: "yearly" },
                  { title: "Custom", value: "custom" },
                ],
              },
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
          ],
          // show both title and cylce in preview
          preview: {
            select: {
              title: "name",
              subtitle: "cycle",
            },
          },
        },
      ],
    },
    {
      name: "comparePlans",
      title: "Compare Plans",
      type: "object",
      fields: [
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "string" }],
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
                  name: "price",
                  title: "Price",
                  type: "string",
                },
                {
                  name: "popular",
                  title: "Popular",
                  type: "boolean",
                },
                {
                  name: "values",
                  title: "Values",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
