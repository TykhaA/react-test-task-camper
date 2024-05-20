import React, { useEffect, useState } from 'react';
import { getCamperListApi } from 'api/requests';
import List from 'components/List';
import './catalog.scss';
import { Outlet } from 'react-router-dom';
import Filters from 'components/Filters';
import Button from 'components/Button';

const Itemlimit = () => {
  const [list, setList] = useState([]);
  const [params, setParams] = useState({});
  const [filters, setFilters] = useState([]);
  const [limit, setLimit] = useState(4);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCamperListApi(limit, params)
      .then(data => {
        setError(false);
        if (filters.length) {
          const filteredData = data.filter(el =>
            filters.some(item => Object.keys(el.details).includes(item))
          );
          setList(filteredData);
        } else {
          setList(data);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, [limit, params, filters]);

  const handleFilter = (params, filters) => {
    setParams(params);
    setFilters(filters);
  };

  const loadMore = () => {
    setLimit(prev => prev + 4);
  };

  return (
    <section className="main-section container">
      <Filters handleFilter={handleFilter}></Filters>
      {error ? (
        'Not found'
      ) : (
        <div className="list-wrap">
          <List list={list}></List>
          <Button onClick={loadMore} text={'Load More'} type={'transparent'} />
          <Outlet></Outlet>
        </div>
      )}
    </section>
  );
};

export default Itemlimit;
