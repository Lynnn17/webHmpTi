const VisiMisi = (data) => {
  console.log(data);
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl font-bold">Visi</h1>
      <p dangerouslySetInnerHTML={{ __html: data.data.visi }} />
      <h1 className="text-2xl font-bold pt-4">Misi</h1>
      <p dangerouslySetInnerHTML={{ __html: data.data.misi }}></p>
    </div>
  );
};

export default VisiMisi;
