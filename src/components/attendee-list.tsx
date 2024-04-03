import React from "react";

export const AttendeeList = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-5">
        <h2 className="text-2xl font-bold">Participantes</h2>

        <div className="flex items-center justify-start gap-2 px-3 w-72 py-2 border border-white/10 bg-transparent text-sm rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            className="bg-transparent flex-1 outline-none ring-0"
            placeholder="Buscar participante..."
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>Código</th>
              <th>Participante</th>
              <th>Data de inscrição</th>
              <th>Data de check-in</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>12345</td>
              <td>
                <span>Pedro Soares Nogueira</span>
                <span>pedro@gmail.com</span>
              </td>
              <td>7 dias atrás</td>
              <td>3 dias atrás</td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Mostrando 10 de 28 registros</td>
              <td colSpan={3}>Página 1 de 23</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
