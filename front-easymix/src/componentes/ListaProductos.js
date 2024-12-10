import React, { useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import { useTable, useSortBy, usePagination } from 'react-table';
import { useNavigate } from 'react-router-dom';

function ProductoList() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8094/api/producto/list') 
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = useMemo(() => [ 
    { Header: 'ID', 
      accessor: 'id', 
    },
    { Header: 'Proveedor', 
        accessor: 'idProveedor.nombre', 
    },
    { Header: 'Usuario', 
        accessor: 'idUsuario.nombre', 
    },  
    { Header: 'Nombre', 
      accessor: 'nombre', 
    }, 
    { Header: 'Descripción', 
      accessor: 'descripcion', 
    },
    { Header: 'Marca', 
        accessor: 'marca', 
    },
    { Header: 'Presentacion', 
        accessor: 'presentacion', 
    },
    { Header: 'cantidad', 
        accessor: 'cantidad', 
    },
    { Header: 'medida', 
        accessor: 'medida', 
    }, 
    { Header: 'Acciones',
      Cell: ({ row }) => (
        <button onClick={() => navigate(`/producto/${row.original.id}`)}>Detalles</button> 
      ), 
    }, 
  ],[navigate]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
  } = useTable({ columns, data: productos }, useSortBy, usePagination);
  
  return (
    <>
      <div {...getTableProps()}>
        <div>
          <table>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                </tr>
                );
              })}
            </tbody>
          </table>  
        </div>
      </div>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </button>
        <button onClick={() => navigate(`/usuario`)}>Mostrar Usuarios</button> 
      </div>
    </>  
  );
}

export default ProductoList;