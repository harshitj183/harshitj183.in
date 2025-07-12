This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Repository Social Previews

This portfolio website now supports displaying GitHub repository social preview images in the repository cards. 

### What are GitHub Social Preview Images?

GitHub allows you to upload custom images for your repositories that appear when your repositories are shared on social media or in search results.

### How to Set Up Social Previews

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll to the "Social preview" section
4. Upload an image (recommended size: 1280×640px)

For more information, see [SOCIAL_PREVIEW_GUIDE.md](./SOCIAL_PREVIEW_GUIDE.md)

## Analytics Setup

This project uses Microsoft Clarity and Google AdSense for analytics. To configure these services:

1. Create a `.env.local` file (for development) and `.env.production` file (for production) with the following variables:

```bash
# Analytics
NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id
NEXT_PUBLIC_ADSENSE_ID=your_adsense_publisher_id
```

2. Replace the placeholder values with your actual Microsoft Clarity project ID and Google AdSense publisher ID.

The analytics components will only be loaded in production environments or when the environment variables are provided.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
