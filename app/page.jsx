import TicketCard from "./(components)/TicketCard";
import { useRouter } from "next/navigation";

const getTickets = async () => {
  try {
    const res = await fetch("${process.env.DOMAIN}/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get Tickets", error);
    return null; // Return null in case of an error
  }
};

const Home = async () => {
  const data = await getTickets();

  if (!data) {
    // Handle the case where data fetching fails
    console.error("Data fetching failed");
    return <div>Error loading data</div>;
  }

  const { tickets } = data;

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];

  return (
    <div className="p-4">
      Dashboard
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4 ">
              <h2 className="text-2xl font-extrabold text-green-500 underline">
                {uniqueCategory}
              </h2>

              <div className="lg:grid grid-cols-2 xl:grid-cols-4  p-2">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <div className="p-2" key={_index}>
                      <TicketCard id={_index} ticket={filteredTicket} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
