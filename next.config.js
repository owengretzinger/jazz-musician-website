/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Netlify's legacy IPX function currently fails to load sharp/libvips.
        // Serve the original assets until the site moves to the current adapter.
        unoptimized: true,
    },
}

module.exports = nextConfig
