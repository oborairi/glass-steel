/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Lint uyarıları build'i durdurmasın (deployment için güvenli)
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
  },
};

export default nextConfig;
