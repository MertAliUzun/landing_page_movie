import { MetadataRoute } from "next";

const BASE_URL = "https://www.zenmoviecollection.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: BASE_URL,
        },
        {
            url: `${BASE_URL}/privacy`,
        },
    ];
}
