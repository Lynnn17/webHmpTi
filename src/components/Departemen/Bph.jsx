import { useState } from "react";
import Bg from "../../assets/bgabu.png";
import Tentang from "../../assets/tentang.png";
import PembatasBawah from "../../assets/pembatas.png";
import bphfoto from "../../assets/departemen/bph.png";
import chco from "../../assets/departemen/chco.png";
const Bph = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="-mt-20 w-full h-full bg-cover  "
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="w-full h-max pt-14 pb-8 md:pt-28 xl:pb-[50px] relative ">
        <img className="mx-auto " src={Tentang} alt="Gambar Tentang" />

        <div className="h-max mt-10  xl:grid xl:grid-cols-2 xl:mx-24 xl:gap-[50px] ">
          <img
            className="w-[87%]  h-full mx-auto xl:hidden"
            src={bphfoto}
            alt="logo ti"
          />
          {/* gambar logo view laptop */}
          <div className="order-start hidden relative xl:flex justify-center items-center  h-[21rem] mx-auto">
            <img className="w-[50rem]" src={bphfoto} alt="logo ti" />
          </div>
          <div className="mx-8 xl:mx-0 text-[#252525] ">
            <h3 className="text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8 mb-4 xl:mb-8 whitespace-normal  ">
              Apa itu BPH?
            </h3>
            <span
              className={`whitespace-pre-wrap text-lg  ${
                isOpen ? null : "line-clamp-[9]"
              }`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              mollitia ab accusantium eum autem saepe, corrupti distinctio quos
              culpa, laboriosam est ipsa unde. Nostrum accusamus sit quisquam
              laboriosam? Corporis eius dolore doloribus quos numquam
              accusantium eligendi! Temporibus voluptatem reprehenderit
              asperiores! Quos, sequi. Quae labore similique unde iste rerum
              expedita ab magnam officia quia perspiciatis? Natus doloremque
              illo amet esse libero autem, officia dolore! Recusandae eligendi
              quia dignissimos eos odit a ipsum autem facere, velit tenetur
              dolorum nesciunt illo aut voluptatibus explicabo neque harum
              quibusdam nobis libero quas. Quaerat, enim explicabo. Quam
              nesciunt labore repellat modi molestiae alias harum molestias
              veniam officiis blanditiis quas, voluptatum assumenda illo
              accusamus corporis inventore culpa ullam vel vitae, atque
              excepturi. Iure ratione iste itaque magnam, facere placeat nulla.
              Est assumenda ipsa animi praesentium corrupti, accusantium natus
              accusamus, mollitia excepturi ab harum qui hic modi error
              perferendis deleniti, repellat reprehenderit exercitationem.
              Voluptate delectus molestias saepe id totam modi, ipsa odio.
              Laborum nemo commodi hic earum blanditiis accusamus recusandae
              corporis inventore ab culpa!
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lg text-blue-500 text-left"
            >
              {isOpen ? "\n Lihat Lebih Sedikit" : "Lihat Selengkapnya "}
            </button>
          </div>
          <div className="flex">
            <img className="w-[50%]" src={chco} alt="Pembatas Kertas" />
            <img className="w-[50%]" src={chco} alt="Pembatas Kertas" />
          </div>
        </div>
      </div>
      <div>
        {/* <img
          className="h-[150px] w-full"
          src={PembatasBawah}
          alt="Pembatas Kertas"
        /> */}
      </div>
    </div>
  );
};

export default Bph;
