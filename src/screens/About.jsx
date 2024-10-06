import aboutUsContent from "../content/aboutUsContent";


function About() {

  
  return (
    <>

      <div className="relative top-10 p-10 bg-gradient-to-r from-green-400 to-blue-500 mb-10" >
      
        <div className="bg-white dark:bg-gray-900 p-5 ">
  
          {aboutUsContent.map((element, index) => (
            <div key={index} className="my-4"   >
              <element.type id={element.idName} className={element.class}>
              
                {element.text}

              </element.type>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default About;
