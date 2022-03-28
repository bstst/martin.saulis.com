import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/state-of-web-development">
        <a>State of Web Development</a>
      </Link>
    </div>
  );
};

export default Home;

// export const config = {
//   unstable_runtimeJS: false,
// };
