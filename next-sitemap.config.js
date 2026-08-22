/** @type {import('next-sitemap').IConfig} */

const fs = require("fs");
const path = require("path");

module.exports = {
  siteUrl: "https://lexiz.is-a.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  additionalPaths: async (config) => {
    const careers = fs.existsSync(path.join(process.cwd(), "data/careers.json"))
      ? JSON.parse(
          fs.readFileSync(
            path.join(process.cwd(), "data/careers.json"),
            "utf-8",
          ),
        )
      : [];
    const projects = fs.existsSync(
      path.join(process.cwd(), "data/projects.json"),
    )
      ? JSON.parse(
          fs.readFileSync(
            path.join(process.cwd(), "data/projects.json"),
            "utf-8",
          ),
        )
      : [];

    const staticPaths = [
      await config.transform(config, "/"),
      await config.transform(config, "/work"),
      await config.transform(config, "/contact"),
    ];

    const career = await Promise.all(
      careers.map((item) => config.transform(config, `/career/${item.slug}`)),
    );

    const project = await Promise.all(
      projects.map((item) => config.transform(config, `/work/${item.slug}`)),
    );

    return [...staticPaths, ...career, ...project];
  },
};
