const baseurl = "https://api.tvmaze.com/";

const FetchDatabyQuery = async (query) => {
  try {

    if (query) {
      const response = await fetch(
        `${baseurl}shows/${query}`,
      );

      if (!response.ok) {
        throw new Error("Data can't be fetched error...");
      }

      const data = await response.json();
      return data;
    } else {
      const response = await fetch(`${baseurl}search/shows?q=all`);
      console.log(`${baseurl}search/shows?q=all`)

      if (!response.ok) {
        throw new Error("Data can't be fetched error...");
      }

      const data = await response.json();
      console.log(data)
      return data;
    }
  } catch (error) {
    console.error("Error in FetchDatabyQuery:", error);
    throw error;
  }
};

export default FetchDatabyQuery;
