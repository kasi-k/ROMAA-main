import React, { useEffect, useState, useMemo } from "react";
import Title from "./Title";
import Button from "./Button";
import { HiArrowsUpDown } from "react-icons/hi2";
import { Pencil } from "lucide-react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbFileExport } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import Pagination from "./Pagination";
import { useSearch } from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Table = ({
  endpoint,
  columns = [],
  AddModal,
  routepoint,
  editroutepoint,
  Datecontent,
  addroutepoint,
  addButtonLabel,
  addButtonIcon,
  EditModal,
  ViewModal,
  DeleteModal,
  deletetitle,
  FilterModal,
  exportModal = true,
  title,
  subtitle,
  pagetitle,
  onExport,
  contentMarginTop = "mt-4",
}) => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch();
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParams, setFilterParams] = useState({
    fromdate: "",
    todate: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const itemsPerPage = 10;

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterParams]);

  const handleFilter = ({ fromdate, todate }) => {
    setFilterParams({ fromdate, todate });
    setShowFilter(false);
    setCurrentPage(1);
  };

  // Sorting logic
  const sortedItems = useMemo(() => {
    let sortableItems = [...endpoint];

    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return sortableItems;
  }, [endpoint, sortConfig]);

  return (
    <div className="font-roboto-flex flex flex-col h-full">
      <div className="lg:flex lg:justify-between">
        <Title title={title} sub_title={subtitle} page_title={pagetitle} />
        <div className="my-2 flex flex-wrap items-center gap-2">
          {Datecontent && (
            <p className="font-semibold ">
              Date:
              <span className="font-medium text-sm opacity-90 px-1">
                17.05.2025
              </span>
            </p>
          )}
          {AddModal && (
            <Button
              button_name={addButtonLabel}
              button_icon={addButtonIcon}
              onClick={() => {
                if (addroutepoint) {
                  navigate(`${addroutepoint}`);
                }
                if (AddModal === true) {
                  setShowAdd(false);
                } else {
                  setShowAdd(true);
                }
              }}
            />
          )}
          {exportModal && (
            <Button
              button_icon={<TbFileExport size={22} />}
              button_name="Export"
              bgColor="dark:bg-layout-dark bg-white"
              textColor="dark:text-white text-darkest-blue"
              onClick={onExport}
            />
          )}
          {FilterModal && (
            <Button
              button_icon={<BiFilterAlt size={22} />}
              button_name="Filter"
              bgColor="dark:bg-layout-dark bg-white"
              textColor="dark:text-white text-darkest-blue"
              onClick={() => setShowFilter(true)}
            />
          )}
        </div>
      </div>

      <div
        className={`${contentMarginTop} overflow-y-auto no-scrollbar h-11/12`}
      >
        <div className="overflow-auto no-scrollbar">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="font-semibold text-sm dark:bg-layout-dark dark:text-white bg-white border-b-4 dark:border-overall_bg-dark border-light-blue">
                <th className="p-3.5 rounded-l-lg">S.no</th>
                {columns.map((col, index) => {
                  const isLastColumn = index === columns.length - 1;
                  const hasAction =
                    EditModal ||
                    ViewModal ||
                    DeleteModal ||
                    routepoint ||
                    editroutepoint;
                  const addRightRadius = isLastColumn && !hasAction;

                  return (
                    <th
                      key={col.key}
                      className={`p-3 text-center cursor-pointer ${
                        addRightRadius ? "rounded-r-lg" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {col.label}
                        <HiArrowsUpDown
                          onClick={() => {
                            let direction = "asc";
                            if (
                              sortConfig.key === col.key &&
                              sortConfig.direction === "asc"
                            ) {
                              direction = "desc";
                            }
                            setSortConfig({ key: col.key, direction });
                          }}
                          size={18}
                          className={
                            sortConfig.key === col.key
                              ? sortConfig.direction === "asc"
                                ? "rotate-180 border border-darkest-blue"
                                : ""
                              : ""
                          }
                        />
                      </div>
                    </th>
                  );
                })}
                {(EditModal ||
                  ViewModal ||
                  DeleteModal ||
                  routepoint ||
                  editroutepoint) && (
                  <th className="pr-2 text-center rounded-r-lg">Action</th>
                )}
              </tr>
            </thead>

            <tbody className=" dark:text-white text-greyish dark:bg-layout-dark bg-white text-sm font-light">
              {sortedItems.length > 0 ? (
                sortedItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b-[3px] dark:border-overall_bg-dark border-light-blue text-center"
                  >
                    <td className="p-2 rounded-l-lg">{index + 1}</td>
                    {columns.map((col, colIndex) => {
                      const isLastColumn = colIndex === columns.length - 1;
                      const hasAction =
                        EditModal ||
                        ViewModal ||
                        DeleteModal ||
                        routepoint ||
                        editroutepoint;
                      const addRightRadius = isLastColumn && !hasAction;

                      const cellValue = col.render
                        ? col.render(item)
                        : item[col.key];
                      const isEmpty =
                        cellValue === null ||
                        cellValue === undefined ||
                        cellValue === "" ||
                        (typeof cellValue === "string" &&
                          cellValue.trim().toLowerCase() === "undefined");
                      const displayValue = isEmpty ? "-" : cellValue;

                      return (
                        <td
                          key={col.key}
                          className={`p-2.5 text-center ${
                            addRightRadius ? "rounded-r-lg" : ""
                          }`}
                        >
                          {displayValue}
                        </td>
                      );
                    })}
                    {(EditModal ||
                      ViewModal ||
                      DeleteModal ||
                      routepoint ||
                      editroutepoint) && (
                      <td className="space-x-2.5 p-2 rounded-r-lg">
                        {(EditModal || editroutepoint) && (
                          <button
                            onClick={() => {
                              if (editroutepoint) {
                                navigate(`${editroutepoint}`, {
                                  state: { item },
                                });
                              }
                              if (EditModal === true) {
                                setShowEdit(false);
                              } else {
                                setSelectedItem(item);
                                setShowEdit(true);
                              }
                            }}
                            className="cursor-pointer dark:bg-icon-dark-blue bg-[#C9E0FF] p-1.5 rounded"
                          >
                            <Pencil size={14} className="dark:text-white text-blue-500" />
                          </button>
                        )}
                        {(ViewModal || routepoint) && (
                          <button
                            onClick={() => {
                              if (routepoint) {
                                navigate(`${routepoint}`, {
                                  state: { item },
                                });
                              }
                              if (ViewModal === true) {
                                setShowView(false);
                              } else {
                                setSelectedItem(item);
                                setShowView(true);
                              }
                            }}
                            className="cursor-pointer dark:bg-icon-dark-green bg-[#BAFFBA] p-1.5 rounded"
                          >
                            <LuEye size={14} className="text-[#008000] dark:text-[#BAFFBA]" />
                          </button>
                        )}
                        {DeleteModal && (
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setShowDelete(true);
                            }}
                            className="cursor-pointer bg-red-100 p-1.5 rounded-sm"
                          >
                            <RiDeleteBinLine
                              size={14}
                              className="text-red-600"
                            />
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + 2}
                    className="text-center py-10 dark:text-white text-gray-500"
                  >
                    No matching results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        totalItems={sortedItems.length}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {AddModal && showAdd && <AddModal onclose={() => setShowAdd(false)} />}
      {EditModal && showEdit && (
        <EditModal onclose={() => setShowEdit(false)} item={selectedItem} />
      )}
      {ViewModal && showView && (
        <ViewModal onclose={() => setShowView(false)} item={selectedItem} />
      )}
      {DeleteModal && showDelete && (
        <DeleteModal
          onclose={() => setShowDelete(false)}
          item={selectedItem}
          deletetitle={deletetitle}
        />
      )}
      {FilterModal && showFilter && (
        <FilterModal
          onclose={() => setShowFilter(false)}
          onFilter={handleFilter}
        />
      )}
    </div>
  );
};

export default Table;
