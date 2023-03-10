import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import { ArrowUp, CaretDown } from 'phosphor-react';
import { twMerge } from 'tailwind-merge';

import { Pagination } from '@components/Pagination';
import { Tag } from '@components/Tag';

type LinesListProp = {
  data: Array<any>;
  className?: string;
};

export function ConversionPixelsList({ data, className }: LinesListProp) {
  return (
    <div>
      <div className={twMerge('flex', className)}>
        <div className="flex flex-col">
          {data.map((item) => {
            return (
              <Dialog.Trigger
                key={item}
                className="odd:bg-zinc-50 even:bg-white p-2 h-24 w-[19rem] min-w-[30rem] border-b border-purple-900 flex flex-col gap-3"
              >
                <span className="text-base font-semibold text-gray-300 self-start ml-6">
                  Nome
                </span>
                <Tag.Root>
                  <Tag.Title className="flex font-semibold items-center ml-6">
                    Nome do Pixel
                  </Tag.Title>
                </Tag.Root>
              </Dialog.Trigger>
            );
          })}
        </div>

        <Tooltip.Provider delayDuration={0}>
          <div className="scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5] scrollbar-thin">
            {data.map((item) => {
              return (
                <div
                  key={item}
                  className="odd:bg-zinc-50 even:bg-white p-2 pr-6 gap-[3.75rem] h-24 border-b border-purple-900 whitespace-nowrap inline-flex min-w-full"
                >
                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      ID
                      <button type="button">
                        <ArrowUp className="text-orange-500" />
                      </button>
                    </span>
                    <span className="font-semibold text-blue-900">0000001</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Status
                    </span>
                    <span className="font-semibold text-blue-900">Pausado</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Cargas nas ??ltimas 12 horas
                      <button type="button">
                        <ArrowUp className="text-orange-500" />
                      </button>
                    </span>
                    <span className="font-semibold text-blue-900">- -</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      ??ltima Carga
                      <button type="button">
                        <ArrowUp className="text-orange-500" />
                      </button>
                    </span>
                    <span className="font-semibold text-blue-900">
                      Nenhuma nas ??ltimas 12 horas
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-2 text-base font-semibold text-gray-300">
                      Cria????o
                    </span>
                    <span className="font-semibold text-blue-900">01/01/2022</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Tooltip.Provider>
      </div>

      <footer className="flex justify-between pl-20 pr-16 mt-5">
        <span className="text-blue-900">
          Apresentando {data.length} {data.length === 1 ? 'Item' : 'Itens'}
        </span>

        <div className="flex gap-24">
          <div className="flex items-center gap-1">
            <span className="text-blue-900">Fileiras por p??gina: 10</span>
            <button type="button">
              <CaretDown weight="bold" size={12} className="text-orange-600" />
            </button>
          </div>

          <Pagination />
        </div>
      </footer>
    </div>
  );
}
