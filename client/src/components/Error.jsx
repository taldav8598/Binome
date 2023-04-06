function ErrorPage() {
    return (
        <div className="flex h-screen bg-[url('./assets/forest.jpg')] bg-center" id="background">
      <div className={`flex flex-col w-full h-full items-center bg-black bg-opacity-75`}>
        <div className="flex flex-col w-full my-2 mx-2 p-0">
        
        <h2 className="p-10 text-5xl text-center text-green-400">Error</h2>
        <p className="p-10 text-xl text-center text-green-400">An error occurred!</p>
        </div>
        <div>
        </div>
      </div>
    </div>
    )
}

export default ErrorPage;