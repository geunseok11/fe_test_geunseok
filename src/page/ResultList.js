import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadResult, loadSearchList } from "../reducer/result";
import Search from "../component/Search";

const ResultList = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState("");
  const resultList = useSelector((state) => state?.result);
  // const resultCount = useSelector((state) => state.result.data?.count);
  console.log("resultList", resultList);
  // const classes = useStyles();

  // useEffect(() => {
  //   dispatch(loadResult(page));
  // }, [page]);

  useEffect(() => {
    dispatch(loadResult());
  });

  const getFormatDate = (date) => {
    return date.substr(0, 9);
  };

  const getFormatPrice = (price) => {
    return price.substr(0, price.length - 3) + " 원";
  };

  return (
    <React.Fragment>
      <div>
        <div>게시판</div>
        <div>
          <Search />
        </div>
        <table size="small">
          <thead>
            <th>
              <td>ID</td>
              <td>제목</td>
              <td>가격</td>
              <td>날짜</td>
              <td>조회수</td>
            </th>
          </thead>
          <tbody>
            {resultList &&
              resultList.map((el) => (
                <th key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{getFormatPrice(el.price)}</td>
                  <td>{getFormatDate(el.created_at)}</td>
                  <td>{el.rate}</td>
                </th>
              ))}
          </tbody>
        </table>
      </div>
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        {/* <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              className={page === data.page1 ? "page-item active" : "page-item"}
              style={{ cursor: "pointer" }}
            >
              <a class="page-link" href="#" onClick={onPressPage1}>
                1
              </a>
            </li>
            <li
              className={page === data.page2 ? "page-item active" : "page-item"}
              style={{ cursor: "pointer" }}
            >
              <a class="page-link" href="#" onClick={onPressPage2}>
                2
              </a>
            </li>
            <li
              className={page === data.page3 ? "page-item active" : "page-item"}
              style={{ cursor: "pointer" }}
            >
              <a class="page-link" href="#" onClick={onPressPage3}>
                3
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </React.Fragment>
  );
};

export default ResultList;
