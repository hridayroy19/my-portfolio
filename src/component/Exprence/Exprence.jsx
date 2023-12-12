
const Exprence = () => {
    return (
        <div className=" mb-9">
            
           <h1 className="text-center items-center text-2xl font-bold text-green-500 mt-4 "> My Expence</h1>

<div className=" grid lg:grid-cols-4 grid-cols-1 ">
<div className="card  bg-base-100 border-[5px]">
  <figure><img src="https://i.ibb.co/dp0Drgs/147792698-web-development-icon-simple-illustration-from-creative-package-collection-creative-web-dev.jpg" alt="Shoes" className="p-6 w-[50%]  " /></figure>
  <div className="card-body">
    <h2 className="card-title">
    MERN stack Web Development
    </h2>
    <p className="text-xl font-bold ">HRIDOY ROY
    <div className="badge ml-3 badge-secondary">jonior devloper</div>
    </p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">fontent</div> 
      <div className="badge badge-outline">backent</div>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Exprence;