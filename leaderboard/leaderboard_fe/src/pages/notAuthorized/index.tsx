function NotAuthorized() {
  return (
    <div className="h-full w-full flex justify-center text-2xl 3xl:text-4xl 4xl:text-7xl">
      <h1 className="text-white-100 font-black">
        You are not authorized to view this page
      </h1>
    </div>
  );
}

export default NotAuthorized;
