/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exportación estática: genera HTML/CSS/JS puro en la carpeta `out/`,
  // ideal para Cloudflare Pages (gratis, tráfico ilimitado, uso comercial OK).
  output: "export",
  // Necesario para export estático si algún día usas <Image>.
  images: { unoptimized: true },
};
export default nextConfig;
