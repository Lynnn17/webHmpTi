import { useState } from "react";
import Kahim from "../../assets/kahim.png";
import Wakahim from "../../assets/wakahim.png";
import Bg from "../../assets/opsi.png";
import Tag from "../../assets/tag.png";
import Sambutan from "../../assets/sambutan.png";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="-mt-20  bg-cover lg:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="py-10 pb-24">
          <img className="mx-auto mt-10" src={Sambutan} alt="" />

          <div className="md:grid flex-col  lg:grid-cols-4 lg:gap-2 md:grid-cols-2 py-10 px-2 ">
            {/* Kahim */}
            <div className="flex flex-col  items-center ">
              <img
                className="lg:w-[250px]  mx-auto w-[175px]"
                src={Kahim}
                alt="Kahim"
              />
              <button
                type="button"
                className="ring-1 ring-[#304463] bg-[#304463] outline-3 outline-gray-200  focus:outline-5 text-white text-lg font-semibold py-1.5 px-14 rounded-full"
              >
                Dawwas Inha Ulhaq
              </button>
              <div>
                <img
                  className="w-[150px] h-[40px] mx-auto mt-[-7px]"
                  src={Tag}
                  alt=""
                />
                <p className=" flex items-center justify-center text-md   text-white font-semibold mx-auto mt-[-35px] ">
                  Kahim
                </p>
              </div>
            </div>

            {/* WAKAHIM */}
            <div className="xl:order-last  flex flex-col  items-center ">
              <img
                className="lg:w-[250px]  mx-auto w-[175px] mt-12 md:mt-2 lg:mt-0"
                src={Wakahim}
                alt="Wakahim"
              />
              <button
                type="button"
                className="rring-1 ring-[#304463] bg-[#304463] outline-3 outline-gray-200  focus:outline-5 text-white text-lg font-semibold py-1.5 px-14 rounded-full"
              >
                Muhamad Raasikh F.
              </button>
              <div>
                <img
                  className="w-[150px] h-[40px] mx-auto mt-[-7px]"
                  src={Tag}
                  alt=""
                />
                <p className=" flex items-center justify-center text-md   text-white font-semibold mx-auto mt-[-35px] ">
                  Wakahim
                </p>
              </div>
            </div>

            {/* Salam */}
            <div className="mt-8 lg:mt-0 text-justify mx-auto flex flex-col px-8 text-[16px] lg:text-[20px]  text-black w-full col-span-2 ">
              <span className=" font-extrabold whitespace-normal ">
                Assalamualaikum Wr Wb. Shalom, Om Swastyastu, Namo Buddhaya,
                Salam Kebajikan Bagi Kita Semua.
              </span>
              <br />
              <span
                className={`whitespace-pre-wrap ${
                  isOpen ? null : "line-clamp-[10]"
                }`}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                mollitia ab accusantium eum autem saepe, corrupti distinctio
                quos culpa, laboriosam est ipsa unde. Nostrum accusamus sit
                quisquam laboriosam? Corporis eius dolore doloribus quos numquam
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
                excepturi. Iure ratione iste itaque magnam, facere placeat
                nulla. Est assumenda ipsa animi praesentium corrupti,
                accusantium natus accusamus, mollitia excepturi ab harum qui hic
                modi error perferendis deleniti, repellat reprehenderit
                exercitationem. Voluptate delectus molestias saepe id totam
                modi, ipsa odio. Laborum nemo commodi hic earum blanditiis
                accusamus recusandae corporis inventore ab culpa! Architecto
                officia expedita quam velit repudiandae hic voluptas laboriosam
                eaque iste. Quisquam alias earum perspiciatis vero enim iusto
                saepe quos, repellendus
              </span>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-blue-500 text-left"
              >
                {isOpen ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya "}
              </button>

              <br />
              <span className="font-extrabold text-black">
                HMP TI UNESA 2024
              </span>
            </div>
          </div>

          <div>
            <span className="flex font-extrabold text-[#304463] justify-center mx-auto lg:text-[28px] text-[20px]">
              #SatukanGagasCiptakanKarya
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;