import { defineType } from "sanity";

export default defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "header",
      title: "Header",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
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
        {
          name: "primaryButton",
          title: "Primary Button",
          type: "reference",
          to: [{ type: "button" }],
        },
        {
          name: "secondaryButton",
          title: "Secondary Button",
          type: "reference",
          to: [{ type: "button" }],
        },
      ],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
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
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  { title: "CTA Button", value: "ctaButton" },
                  { title: "List", value: "list" },
                  { title: "Metrics", value: "metrics" },
                ],
              },
            },
            {
              name: "button",
              title: "Button",
              type: "reference",
              to: [{ type: "button" }],
              hidden: ({ parent }) => parent?.type !== "ctaButton",
            },
            {
              name: "list",
              title: "List",
              type: "array",
              of: [{ type: "string" }],
              hidden: ({ parent }) => parent?.type !== "list",
            },
            {
              name: "metrics",
              title: "Metrics",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "key",
                      title: "Key",
                      type: "string",
                    },
                    {
                      name: "value",
                      title: "Value",
                      type: "number",
                    },
                    {
                      name: "symbol",
                      title: "Symbol",
                      type: "string",
                    },
                  ],
                },
              ],
              hidden: ({ parent }) => parent?.type !== "metrics",
            },
          ],
        },
      ],
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "header.title",
      media: "header.mainImage",
    },
  },
});
