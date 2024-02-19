import Hero from "../hero/Hero";
import OnlyYou from "../onlyYou/OnlyYou";
import Strategies from "../strategies/Strategies";
import Comments from "../comments/Comments";
import Tables from "../tables/Tables";

const AllMain = () => {
    return (
        <main>
            <Hero />
            <OnlyYou/>
            <Strategies/>
            <Tables/>
            <Comments/>
        </main>
        
    );
  };
  
  export default AllMain;
  