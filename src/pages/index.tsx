import { cva, cn } from '@/utils/style';
import { createClient } from '@/utils/supabase/server';
import { createClient as createBrowserClient } from '@/utils/supabase/client';
import { GetServerSideProps } from 'next';

const button = cva('flex');
export default function Home() {
  return (
    <main className="min-h-[2000px]">
      <h1>NEXT JS HEELLLO WOR</h1>
    </main>
  );
}
