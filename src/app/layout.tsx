import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '프라클',
  description: '프라클 프로젝트',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-100`}>
        <Providers>
          {/* ✅ 더 이상 고정 박스 적용하지 않음 */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
