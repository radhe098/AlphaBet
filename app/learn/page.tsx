const Page = () => {
    return (
        <>
            <div className="flex items-center bg-opacity-20 w-[100vw] p-4 mt-12 gap-4 m-auto  h-[100vh] bg-gray-50 mb-24">
            <iframe 
    src="https://docs.google.com/presentation/d/e/2PACX-1vQpZndpfZ0cthtiTHmxIkIWiSUSveyFPH4NUsJk4Kx-moTNsDQr6CFhSiNk7J-5fO4ldwjUqRjSGt0G/embed?start=false&loop=false&delayms=3000" 
    width="100%" 
    height="100%" 
    allowFullScreen={true}
></iframe>
            </div>
        </>
    );
}

Page.displayName = 'Page';

export default Page;