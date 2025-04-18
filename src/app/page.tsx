import mongoose from "mongoose";
import Dashbord from "./_component/Dashboard";
import Header from "./_component/Header";
export default function Home() {
  // mongoose.connect("mongodb://localhost:27017")
  // .then(){
  //   console.log("connect the database ");
  // }

  return (
    <>
      <div className="w-full overflow-x-hidden pt-8 md:pt-0"> 
        <Header />
        <Dashbord />
      </div>
    </>
  );
}
