import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Filters</h1>
            <div className="lsItem">
              <label>Star Rating</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>1 star</label>
                  </span>
                  <span className="lsOptionText">
                    6 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>2 star</label>
                  </span>
                  <span className="lsOptionText">
                    8 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>3 star</label>
                  </span>
                  <span className="lsOptionText">
                    10 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>4 star</label>
                  </span>
                  <span className="lsOptionText">
                    25 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>5 star</label>
                  </span>
                  <span className="lsOptionText">
                    38 <small></small>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsItem">
              <label>Price</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>$20-$50</label>
                  </span>
                  <span className="lsOptionText">
                    6 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>$50-$80</label>
                  </span>
                  <span className="lsOptionText">
                    8 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>$80-120</label>
                  </span>
                  <span className="lsOptionText">
                    10 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>$200-500</label>
                  </span>
                  <span className="lsOptionText">
                    25 <small></small>
                  </span>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">
                  <input type='checkbox' />
                  <label className=''>$500-$1000</label>
                  </span>
                  <span className="lsOptionText">
                    38 <small></small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
