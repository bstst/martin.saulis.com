import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div>
      <div>
        {router.pathname !== '/' && (
          <Link href="/">
            <a>←</a>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
