import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
   return (
      <div className='flex justify-center mt-20 space-x-4'>
         <img
            src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png'
            alt='twitter image inside a phone'
            className='hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex'
         />
         <div className=''>
            {Object.values(providers).map((provider) => (
               <div className='flex flex-col items-center'>
                  <img
                     src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
                     alt='twitter logo'
                     className='w-36 object-cover'
                  />
                  <p className='text-sm italic my-10'>This app is created for learning purposes</p>
                  <button
                     onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                     className='bg-red-400 rounded-lg px-5 py-3 text-white hover:bg-red-500 shadow-md'>
                     Sign in with {provider.name}
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
}

export const getServerSideProps = async (context) => {
   const providers = await getProviders();

   return {
      props: {
         providers,
      },
   };
};
