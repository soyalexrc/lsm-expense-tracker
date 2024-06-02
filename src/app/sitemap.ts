import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://lsm-expense-tracker.xyz',
            lastModified: new Date(),
            priority: 1,
            changeFrequency: "yearly"
        },
        {
            url: 'https://lsm-expense-tracker.xyz/features',
            lastModified: new Date(),
            priority: 0.9,
            changeFrequency: "yearly"
        },
        {
            url: 'https://lsm-expense-tracker.xyz/about',
            lastModified: new Date(),
            priority: 0.8,
            changeFrequency: "yearly"
        },
        {
            url: 'https://lsm-expense-tracker.xyz/contact',
            lastModified: new Date(),
            priority: 0.7,
            changeFrequency: "yearly"
        },
        {
            url: 'https://lsm-expense-tracker.xyz/terms-of-service',
            lastModified: new Date(),
            priority: 0.5,
            changeFrequency: "yearly"
        },
        {
            url: 'https://lsm-expense-tracker.xyz/privacy-policy',
            lastModified: new Date(),
            priority: 0.,
            changeFrequency: "yearly"
        },
    ]
}