import { InlineIcon } from "@iconify/react";

const Table = ({
  headersName,
  data,
  Icon,
  handleDeleteClick,
  handleClick,
  isLoading,
  handleSort,
}) => {
  return (
    <>
      <table className="table mt-3 p-3 rounded-bottom ">
        <thead>
          <tr>
            {headersName?.map((item) => {
              return (
                <>
                  <th className="text-nowrap w-1 ">
                    <div className="d-flex justify-content-between">
                      <div>{item?.displayName}</div>

                      {item.sort && (
                        <div className=" d-flex flex-column flex-wrap">
                          <>
                            <InlineIcon
                              icon="fe:arrow-up"
                              width="15"
                              height="15"
                              style={{ color: "black" }}
                              onClick={() => handleSort(`${item.name}:ASC`)}
                            />
                            <InlineIcon
                              icon="ep:arrow-down-bold"
                              width="10"
                              height="10"
                              style={{ color: "black" }}
                              onClick={() => handleSort(`${item.name}:DESC`)}
                            />
                          </>
                        </div>
                      )}
                    </div>
                  </th>
                </>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <InlineIcon
              icon="svg-spinners:270-ring-with-bg"
              width="48"
              height="48"
              style={{ color: " #70b8d7" }}
            />
          ) : (
            Array.isArray(data) &&
            data?.length &&
            data?.map((val, i) => {
              return (
                <>
                  <tr onClick={() => handleClick(val)}>
                    {headersName?.map((item) => {
                      return (
                        <>
                          {item.name === "Actions" ? (
                            <td
                              onClick={(event) =>
                                handleDeleteClick(event, item)
                              }
                            >
                              {Icon}{" "}
                            </td>
                          ) : (
                            <td>{val[item.name]} </td>
                          )}
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};
export default Table;
