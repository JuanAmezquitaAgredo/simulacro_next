/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // Habilitamos la configuración de i18n
    i18n: {
      locales: ['es', 'en'], // Los idiomas soportados
      defaultLocale: 'es',    // El idioma por defecto
    },
  
    // Activar soporte para styled-components
    compiler: {
      styledComponents: true,
    },
  };
  
  export default nextConfig;
  