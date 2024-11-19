type PageTitleProps = {
  title: string;
};

function PageTitle({ title }: PageTitleProps) {
  return (
    <h1 className="text-center font-black text-3xl 3xl:text-4xl 4xl:text-8xl text-white-100 uppercase">
      {title}
    </h1>
  );
}

export default PageTitle;
