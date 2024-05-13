/** @type {import('next').NextConfig} */

import { hostname } from 'os';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**',
              },
        ]
    }
};

export default nextConfig;
