import rss from "@astrojs/rss";

export const get = () => rss({
    title: "Astro Blog",
    description: "Simple blog built with Astro",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/*.md"),
})