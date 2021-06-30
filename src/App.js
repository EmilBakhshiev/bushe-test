import api from './utils/api';
import { useEffect, useState } from 'react';
import { DataContext } from './contexts/DataContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics';
import ReactPaginate from 'react-paginate';
import './App.css';

function App() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [isStatisticsModal, setIsStatisticsModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [historyCall, setHistoryCall] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  function handlePhoneClick(phone) {
    setHistoryCall(data.filter((elm) => elm[0] === phone));
    setIsOpened(true);
  }

  function getCurrentTimeFromStamp(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }

  const dataPerPage = 50;
  const pagesVisited = pageNumber * dataPerPage;

  const displayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((item, index) => {
      return (
        <tr className='table__row-main' key={index}>
          <td className='table__data-main phone' onClick={() => handlePhoneClick(item[0])}>
            {item[0]}
          </td>
          <td className='table__data-main'>{getCurrentTimeFromStamp(item[1])}</td>
          <td className='table__data-main'>{item[2]}</td>
          <td className='table__data-main'>{item[3]}</td>
          <td className='table__data-main'>{item[4]}</td>
        </tr>
      );
    });

  useEffect(() => {
    api.getData().then((res) => {
      setColumns(res.columns);
      setData(res.data);
    });
  }, []);

  function isStatisticsOpen() {
    setIsStatisticsModal(true);
  }

  function closeAllModals() {
    setIsStatisticsModal(false);
  }
  const pageCount = Math.ceil(data.length / dataPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  return (
    <div className='app'>
      <DataContext.Provider value={data}>
        <Header statisticsModal={isStatisticsOpen} />
        <Main
        setIsOpened={setIsOpened}
        historyCall={historyCall}
        getCurrentTimeFromStamp={getCurrentTimeFromStamp}
          historyCallOpened={isOpened}
          colomun={columns}
          paginationData={displayData}
          paginationBtns={
            <ReactPaginate
              previousLabel={'Предыдущая'}
              nextLabel={'Следующая'}
              pageCount={pageCount}
              onPageChange={changePage}
              pageClassName={'pagination__page'}
              containerClassName={'pagination'}
              activeClassName={'pagination__active'}
            />
          }
        />
        <Statistics getCurrentTimeFromStamp={getCurrentTimeFromStamp} onClose={closeAllModals} isOpen={isStatisticsModal} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
