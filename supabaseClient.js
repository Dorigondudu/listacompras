// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://rrnwxsieiecmcsmtryux.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybnd4c2llaWVjbWNzbXRyeXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1MjIsImV4cCI6MjA2MjExMTUyMn0.F5KZm-HiVbd9W12P3figvuJl6PObzRIbQvmg4ioxdho'