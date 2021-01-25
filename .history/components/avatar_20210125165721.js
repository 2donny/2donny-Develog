export default function Avatar({ picture }) {
  return (
    <div className="flex justify-center mt-5">
      <img 
        src={picture} 
        className=" max-w-4xl h-64 rounded-full mr-4 2xl:w-96 2xl:h-96" 
        alt="정이든" 
      
      />
    </div>
  )
}
