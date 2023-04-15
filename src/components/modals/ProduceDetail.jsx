import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import {BASE_URL} from '../../services/api'
import axios from 'axios'

export default function ProduceDetail() {
  let [isOpen, setIsOpen] = useState(false)
  const {item} = useContext(UserContext)
  const [detail, setDetail] = useState([])
  const [ready,setReady] = useState(false)


  function closeModal() {
    setIsOpen(false)
    
  }


  function openModal() {
    setIsOpen(true)
  }


  useEffect(() => {
    const getDetail = async () => {
        const res = await axios.get(`${BASE_URL}api/produce/${item.id}`);
        setDetail(res.data)
        setReady(!ready)
    }
    getDetail();
  }, [item])


  if (detail){

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="float-left w-[FIT] px-1 ml-2 h-[3vh] text-xs rounded-lg bg-mylime"
        >
         MORE DETAILS
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {detail.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     Are you sure you would like to delete this note?
                    </p>
                  </div>

                  <div className="mt-4 flex justify-start gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>)
   
  }
}
