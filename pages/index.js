import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home() {
   return (
      <div>
         <Head>
            <title>Twitter Guess</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <main className='flex min-h-screen max-w-7xl mx-auto'>
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widgets />

            {/* Modal */}
         </main>
      </div>
   );
}
