import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

export default function Kontak() {
  return (
    <div className="w-full">
      <Card id="kontak">
        <CardHeader className="text-2xl font-semibold text-red-800 mb-6">
          Informasi Kontak
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:sdnmadyopurolima@gmail.com"
                  className="text-red-700 font-medium hover:underline"
                >
                  sdnmadyopurolima@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg hover:shadow-md transition-shadow border-2 ">
            <div className="flex items-center space-x-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-500">Telepon</p>
                <p className="text-red-700 font-medium">(0341) 715349</p>
              </div>
            </div>
          </div>

          <section className="flex flex-col space-y-3 w-full ">
            <h3 className="text-xl font-medium text-red-800 mb-4">Lokasi</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.209851038215!2d112.669389898377!3d-7.977249917130435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6286ef8da6779%3A0x8802167889fcf53f!2sSDN%20Madyopuro%205%20Malang!5e0!3m2!1sid!2sid!4v1741421763963!5m2!1sid!2sid"
              className="w-290 h-100 rounded-lg shadow-md border-2 border-red-200"
              allowFullScreen
              loading="fast"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
