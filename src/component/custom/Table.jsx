import { Icon } from "@iconify/react";

const Table = ({
  headersName,
  data,
  Icon,
  onClick,
  handleDeleteClick,
  handleClick,
}) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headersName?.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {Array.isArray(data) &&
            data?.length &&
            data?.map((val, i) => {
              return (
                <>
                  <tr onClick={() => handleClick(val)}>
                    {headersName?.map((item) => {
                      return (
                        <>
                          {item === "Actions" ? (
                            <td
                              onClick={(event) =>
                                handleDeleteClick(event, item)
                              }
                            >
                              {Icon}{" "}
                            </td>
                          ) : (
                            <td>{val[item]} </td>
                          )}
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
