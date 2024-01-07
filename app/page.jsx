
import TicketCard from "./(components)/TicketCard";
 

  const getTickets = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {

        cache: "no-store",

      });

      return res.json();

    } catch (error) {

      console.log("Failed to get Tickets", error);
      
    }
  };

  const Home = async () => {


    const { tickets } = await getTickets();

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
