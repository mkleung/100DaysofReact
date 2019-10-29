import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <footer class="bg-gray-100">
      <div class="container mx-auto px-6 pt-10 pb-6">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Links</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <Link class="hover:underline text-gray-600 hover:text-orange-500">
                  FAQ
                </Link>
              </li>
              <li class="mt-2">
                <Link class="hover:underline text-gray-600 hover:text-orange-500">
                  Help
                </Link>
              </li>
              <li class="mt-2">
                <Link class="hover:underline text-gray-600 hover:text-orange-500">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Legal</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <Link class="hover:underline text-gray-600 hover:text-orange-500">
                  Terms
                </Link>
              </li>
              <li class="mt-2">
                <Link class="hover:underline text-gray-600 hover:text-orange-500">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default App;
