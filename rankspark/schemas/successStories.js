export default {
  name: "successStories",
  title: "Success Stories",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        // {
        //   name: "caption",
        //   type: "string",
        //   title: "Image caption",
        //   description: "Appears below image.",

        // },
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
      name: "services",
      title: "Services Used",
      type: "array",
      of: [{ type: "reference", to: { type: "service" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
