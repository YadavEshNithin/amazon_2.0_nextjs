import { Dialog, Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { Fragment, useState } from 'react';

const AddressDialog = ({ isOpen, onClose }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const { data: session } = useSession()

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-24 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>


          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title as="h3" className="text-md font-bold leading-6 text-gray-900">
                Choose your location
              </Dialog.Title>

              <div className="bg-gray-300 w-full pb-0.5 mt-4"></div>

              <p className="pt-4 sm:w-[70%] text-xs">Select a location to see products availability and delivery options</p>

              <form className="mt-2" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <button className="button text-center w-full">{session ? "Please, continue to see the address" : "Sign in to see the address"}</button>
                  <div className="flex text-sm mt-3 justify-between items-center pb-1">
                    <p className="pb-0.5 w-16 sm:w-28 bg-gray-300"></p>
                    <p className="text-gray-500 text-xs sm:text-sm">or enter an Indian Pincode</p>
                    <p className="pb-0.5 w-16 sm:w-28 bg-gray-300"></p>
                  </div>

                  <div className="flex flex-grow space-x-3">
                    <input className="border border-gray-400 flex-grow rounded-lg" type="text" />
                    <button className="w-20 text-sm  border shadow border-gray-300 p-1 rounded-lg">Apply</button>
                  </div>

                  <div className="flex text-sm my-2 justify-between items-center pb-1">
                    <p className="pb-0.5 w-44 bg-gray-300"></p>
                    <p className="">or</p>
                    <p className="pb-0.5 w-44 bg-gray-300"></p>
                  </div>
                  <div className="w-full">
                    <select className="w-full border shadow-md rounded-lg border-gray-300 p-1" name="" id="">
                      <option value="">Delivery location outside India</option>
                      <option value="">SriLanka</option>
                      <option value="">Bangladesh</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddressDialog;
