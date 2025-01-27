interface ImportMetaEnv {
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  readonly VITE_OPTIONS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 
