/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true
    },
    images:{
        domains:['petetco.maralamirkian.com']
    }
};

export default nextConfig;
