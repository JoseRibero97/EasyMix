import React, { useMemo, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductTable = ({ usuarioId }) => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Obtener todos los productos y filtrar por usuarioId
    axios.get('http://localhost:8094/api/producto/list')
      .then(response => {
        const productosFiltrados = response.data.filter(producto => producto.idUsuario.id === usuarioId);
        setProductos(productosFiltrados);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, [usuarioId]);

  const columns = useMemo(
    
    () => [
      {
        Header: 'Nombre',
        accessor: 'nombre',
      },
      {
        Header: 'Descripción',
        accessor: 'descripcion',
      },
      {
        Header: 'Marca',
        accessor: 'marca',
      },
      {
        Header: 'Presentación',
        accessor: 'presentacion',
      },
      {
        Header: 'Cantidad',
        accessor: 'cantidad',
      },
      {
        Header: 'Medida',
        accessor: 'medida',
      },
      { Header: 'Acciones',
        Cell: ({ row }) => (
          <button onClick={() => navigate(`/producto/${row.original.id}`)}>Detalles</button> 
        ), 
      },
    ],
    [navigate]
  );

  const tableInstance = useTable({ columns, data: productos });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} className="product-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
