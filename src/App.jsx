import './App.css';

function App() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-auto sm:h-screen'>
      <div className='my-8 sm:m-auto'>
        <div className='mb-4 font-semibold text-left'>Select Distribution</div>
        <div className='flex gap-4 flex-col sm:flex-row'>
          <div className='w-80 h-[420px] p-[2px] rounded-md bg-gray-100 hover:bg-transparent hover:bg-gradient-to-b hover:from-red-700 hover:via-gray-300 hover:to-transparent hover:shadow-lg hover:shadow-gray-300'>
            <div className='h-full p-6 bg-white rounded-md'>
              <img className='mb-6' src='./airplane.png' alt='Airplane logo'/>
              <div className='text-red-700 text-2xl'>Basic</div>
              <div className='flex items-center mt-2 text-sm'>
                Published to 100+ news sites
                <span className='material-symbols-outlined text-sm ml-1'>expand_less</span>
              </div>
              <div className='flex items-center mt-4'>
                <div className='text-3xl font-bold'>$74.99</div>
                <div className='flex items-center ml-3'>
                  Per release
                  <span className='material-symbols-outlined text-sm ml-3'>info</span>
                </div>
              </div>
              <div className='mt-4 text-sm'>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Published on digital journal
                </div>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Sent to google news
                </div>
                <div className='flex'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  And many more
                </div>
              </div>
            </div>
          </div>
          <div className='w-80 h-[420px] p-[2px] rounded-md bg-gray-100 hover:bg-transparent hover:bg-gradient-to-b hover:from-red-700 hover:via-gray-300 hover:to-transparent hover:shadow-lg hover:shadow-gray-300'>
            <div className='h-full p-6 bg-white rounded-md'>
              <img className='mb-6' src='./rocket.png' alt='Rocket logo'/>
              <div className='text-red-700 text-2xl'>US National</div>
              <div className='flex items-center mt-2 text-sm'>
                Published to 200+ news sites
                <span className='material-symbols-outlined text-sm ml-1'>expand_less</span>
              </div>
              <div className='flex items-center mt-4'>
                <div className='text-3xl font-bold'>$419.99</div>
                <div className='flex items-center ml-3'>
                  Per release
                  <span className='material-symbols-outlined text-sm ml-3'>info</span>
                </div>
              </div>
              <div className='mt-4 text-sm'>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Published on digital journal
                </div>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Published on PRnewswire.com
                </div>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Published on Yahoo finance
                </div>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Sent to market watch
                </div>
                <div className='flex mb-2'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  Sent to google news
                </div>
                <div className='flex'>
                  <img className='mr-2' src='./check.png' alt='Checkmark' />
                  And many more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
