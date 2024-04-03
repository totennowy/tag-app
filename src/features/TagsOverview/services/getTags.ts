import axios from 'axios';

const getTags = async (
  tableRowsQuantity: number,
  currentPage: number,
  sortType: 'asc' | 'desc',
  sortOptions: 'name' | 'popular' | 'activity'
) => {
  try {
    const response = await axios.get(`https://api.stackexchange.com/2.3/tags`, {
      params: {
        pagesize: tableRowsQuantity,
        page: currentPage,
        order: sortType,
        sort: sortOptions,
        site: 'stackoverflow'
      }
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('There was an issue fetching the data', error.message);
      throw Error;
    } else {
      console.log('An unknown error occured: ', error);
      throw new Error('An unknown error occured');
    }
  }
};

export default getTags;
