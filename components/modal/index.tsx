/* This example requires Tailwind CSS v2.0+ */
import { Dialog } from "@headlessui/react";

interface Props {
  open: boolean;
  setOpen: any;
  res: any;
}
export default function Example({ open, setOpen, res }: Props) {
  let referenceName = res.bio1Name.split(" ").slice(0, 1);
  return (
    <>
      {open ? (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 h-screen overflow-y-auto"
          onClose={setOpen}
          open={open}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:items-end sm:block sm:p-0">
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden mt-56 sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {referenceName}, This is Just a Demo Site
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      I haven&#39;t built out the supporting pages - if
                      you&#39;d like to like to have a conversation about doing
                      so, let&#39;s chat.
                    </p>
                    <p className="mt-8 text-sm text-left text-gray-500">
                      Ryan Owens
                    </p>
                    <p className="text-sm text-left text-gray-500">
                      (304) 247-1817
                    </p>
                    <p className="text-sm text-left text-gray-500 ">
                      ryan@webpagesthatconvert.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Back to Demo Page
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      ) : null}
    </>
  );
}
