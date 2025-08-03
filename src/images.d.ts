declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    const content: string;
    export default content;
  }

interface ImportMetaEnv {
  VITE_API_URL: string;
  BASE_URL: string; 
}

interface ImportMeta {
  env: ImportMetaEnv;
}

  