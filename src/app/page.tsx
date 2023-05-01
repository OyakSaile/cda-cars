"use client";

import { Inter } from "next/font/google";
import { Car } from "@phosphor-icons/react";
import { InputText } from "@/components/inputText";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [carName, setCarName] = useState("");
  const [acceleration, setAcceleration] = useState("");
  const [topSpeed, setTopSpeed] = useState("");
  const [topSpeedWithBump, setTopSpeedWithBump] = useState("");

  const handleBalanceCar = () => {
    toast(
      `Nome do Carro ${carName}, <br/> Aceleração : ${acceleration}, Top Speed : ${topSpeed}, Top Speed com Ondulação : ${topSpeedWithBump}`
    );
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center flex-col">
        <Car weight="fill" size={54} className="text-indigo-500" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Balanceamento de carros
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <InputText
              label="Nome do Carro"
              placeholder="Ex: Calico"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
            />
          </div>
          <div>
            <InputText
              label="Aceleração (0-100KM) em Segundos"
              placeholder="Ex: 5"
              value={acceleration}
              onChange={(e) => setAcceleration(e.target.value)}
            />
          </div>
          <div>
            <InputText
              label="Top Speed"
              placeholder="Ex: 250"
              value={topSpeed}
              onChange={(e) => setTopSpeed(e.target.value)}
            />
          </div>
          <div>
            <InputText
              label="Top Speed com ondulação"
              placeholder="Ex: 300"
              value={topSpeedWithBump}
              onChange={(e) => setTopSpeedWithBump(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Rank do carro
            </label>
            <div className="mt-2">
              <div className="mt-6  justify-between flex">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    S+
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    A+
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    A
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    B
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    C
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="push-nothing"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    D
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleBalanceCar}
            >
              Balancear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
