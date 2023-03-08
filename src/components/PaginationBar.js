import { Pagination } from "semantic-ui-react";

const PaginationBar = ({ activePage, handlePagination }) => (
  <Pagination
    // defaultActivePage={1}
    totalPages={100}
    activePage={activePage}
    onClick={(event, data) =>
      handlePagination(event.target.attributes.value.value)
    }
    // onClick={(event) => console.log(event.target.attributes.value.value)}
  />
);

export default PaginationBar;
