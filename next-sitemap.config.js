/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://lexiz.is-a.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  additionalPaths: async (config) => {
    // ✅ Generate paths for static pages
    const staticPaths = [
      await config.transform(config, "/"),
      await config.transform(config, "/work"),
      await config.transform(config, "/contact"),
    ];

    // ✅ Add blog post pages
    // const blogPaths = await Promise.all(
    //   apartments.map((item) =>
    //     config.transform(config, `/properties/${item.slug}`)
    //   )
    // );

    return [...staticPaths];
  },
};
